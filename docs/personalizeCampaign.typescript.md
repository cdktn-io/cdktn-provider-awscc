# `personalizeCampaign` Submodule <a name="`personalizeCampaign` Submodule" id="@cdktn/provider-awscc.personalizeCampaign"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PersonalizeCampaign <a name="PersonalizeCampaign" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/personalize_campaign awscc_personalize_campaign}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.Initializer"></a>

```typescript
import { personalizeCampaign } from '@cdktn/provider-awscc'

new personalizeCampaign.PersonalizeCampaign(scope: Construct, id: string, config: PersonalizeCampaignConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignConfig">PersonalizeCampaignConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignConfig">PersonalizeCampaignConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.putCampaignConfig">putCampaignConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.resetCampaignConfig">resetCampaignConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.resetMinProvisionedTps">resetMinProvisionedTps</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putCampaignConfig` <a name="putCampaignConfig" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.putCampaignConfig"></a>

```typescript
public putCampaignConfig(value: PersonalizeCampaignCampaignConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.putCampaignConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignCampaignConfig">PersonalizeCampaignCampaignConfig</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.putTags"></a>

```typescript
public putTags(value: IResolvable | PersonalizeCampaignTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignTags">PersonalizeCampaignTags</a>[]

---

##### `resetCampaignConfig` <a name="resetCampaignConfig" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.resetCampaignConfig"></a>

```typescript
public resetCampaignConfig(): void
```

##### `resetMinProvisionedTps` <a name="resetMinProvisionedTps" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.resetMinProvisionedTps"></a>

```typescript
public resetMinProvisionedTps(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a PersonalizeCampaign resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.isConstruct"></a>

```typescript
import { personalizeCampaign } from '@cdktn/provider-awscc'

personalizeCampaign.PersonalizeCampaign.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.isTerraformElement"></a>

```typescript
import { personalizeCampaign } from '@cdktn/provider-awscc'

personalizeCampaign.PersonalizeCampaign.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.isTerraformResource"></a>

```typescript
import { personalizeCampaign } from '@cdktn/provider-awscc'

personalizeCampaign.PersonalizeCampaign.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.generateConfigForImport"></a>

```typescript
import { personalizeCampaign } from '@cdktn/provider-awscc'

personalizeCampaign.PersonalizeCampaign.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a PersonalizeCampaign resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the PersonalizeCampaign to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing PersonalizeCampaign that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/personalize_campaign#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the PersonalizeCampaign to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.property.campaignArn">campaignArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.property.campaignConfig">campaignConfig</a></code> | <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignCampaignConfigOutputReference">PersonalizeCampaignCampaignConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.property.creationDateTime">creationDateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.property.lastUpdatedDateTime">lastUpdatedDateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignTagsList">PersonalizeCampaignTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.property.campaignConfigInput">campaignConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignCampaignConfig">PersonalizeCampaignCampaignConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.property.minProvisionedTpsInput">minProvisionedTpsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.property.solutionVersionArnInput">solutionVersionArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignTags">PersonalizeCampaignTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.property.minProvisionedTps">minProvisionedTps</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.property.solutionVersionArn">solutionVersionArn</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `campaignArn`<sup>Required</sup> <a name="campaignArn" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.property.campaignArn"></a>

```typescript
public readonly campaignArn: string;
```

- *Type:* string

---

##### `campaignConfig`<sup>Required</sup> <a name="campaignConfig" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.property.campaignConfig"></a>

```typescript
public readonly campaignConfig: PersonalizeCampaignCampaignConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignCampaignConfigOutputReference">PersonalizeCampaignCampaignConfigOutputReference</a>

---

##### `creationDateTime`<sup>Required</sup> <a name="creationDateTime" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.property.creationDateTime"></a>

```typescript
public readonly creationDateTime: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `lastUpdatedDateTime`<sup>Required</sup> <a name="lastUpdatedDateTime" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.property.lastUpdatedDateTime"></a>

```typescript
public readonly lastUpdatedDateTime: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.property.tags"></a>

```typescript
public readonly tags: PersonalizeCampaignTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignTagsList">PersonalizeCampaignTagsList</a>

---

##### `campaignConfigInput`<sup>Optional</sup> <a name="campaignConfigInput" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.property.campaignConfigInput"></a>

```typescript
public readonly campaignConfigInput: IResolvable | PersonalizeCampaignCampaignConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignCampaignConfig">PersonalizeCampaignCampaignConfig</a>

---

##### `minProvisionedTpsInput`<sup>Optional</sup> <a name="minProvisionedTpsInput" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.property.minProvisionedTpsInput"></a>

```typescript
public readonly minProvisionedTpsInput: number;
```

- *Type:* number

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `solutionVersionArnInput`<sup>Optional</sup> <a name="solutionVersionArnInput" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.property.solutionVersionArnInput"></a>

```typescript
public readonly solutionVersionArnInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | PersonalizeCampaignTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignTags">PersonalizeCampaignTags</a>[]

---

##### `minProvisionedTps`<sup>Required</sup> <a name="minProvisionedTps" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.property.minProvisionedTps"></a>

```typescript
public readonly minProvisionedTps: number;
```

- *Type:* number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `solutionVersionArn`<sup>Required</sup> <a name="solutionVersionArn" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.property.solutionVersionArn"></a>

```typescript
public readonly solutionVersionArn: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaign.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### PersonalizeCampaignCampaignConfig <a name="PersonalizeCampaignCampaignConfig" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignCampaignConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignCampaignConfig.Initializer"></a>

```typescript
import { personalizeCampaign } from '@cdktn/provider-awscc'

const personalizeCampaignCampaignConfig: personalizeCampaign.PersonalizeCampaignCampaignConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignCampaignConfig.property.enableMetadataWithRecommendations">enableMetadataWithRecommendations</a></code> | <code>boolean \| cdktn.IResolvable</code> | Whether metadata with recommendations is enabled for the campaign. |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignCampaignConfig.property.itemExplorationConfig">itemExplorationConfig</a></code> | <code>{[ key: string ]: string}</code> | Specifies the exploration configuration hyperparameters. |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignCampaignConfig.property.rankingInfluence">rankingInfluence</a></code> | <code>{[ key: string ]: number}</code> | A map of ranking influence values for POPULARITY and FRESHNESS. |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignCampaignConfig.property.syncWithLatestSolutionVersion">syncWithLatestSolutionVersion</a></code> | <code>boolean \| cdktn.IResolvable</code> | Whether the campaign automatically updates to use the latest solution version. |

---

##### `enableMetadataWithRecommendations`<sup>Optional</sup> <a name="enableMetadataWithRecommendations" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignCampaignConfig.property.enableMetadataWithRecommendations"></a>

```typescript
public readonly enableMetadataWithRecommendations: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Whether metadata with recommendations is enabled for the campaign.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/personalize_campaign#enable_metadata_with_recommendations PersonalizeCampaign#enable_metadata_with_recommendations}

---

##### `itemExplorationConfig`<sup>Optional</sup> <a name="itemExplorationConfig" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignCampaignConfig.property.itemExplorationConfig"></a>

```typescript
public readonly itemExplorationConfig: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Specifies the exploration configuration hyperparameters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/personalize_campaign#item_exploration_config PersonalizeCampaign#item_exploration_config}

---

##### `rankingInfluence`<sup>Optional</sup> <a name="rankingInfluence" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignCampaignConfig.property.rankingInfluence"></a>

```typescript
public readonly rankingInfluence: {[ key: string ]: number};
```

- *Type:* {[ key: string ]: number}

A map of ranking influence values for POPULARITY and FRESHNESS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/personalize_campaign#ranking_influence PersonalizeCampaign#ranking_influence}

---

##### `syncWithLatestSolutionVersion`<sup>Optional</sup> <a name="syncWithLatestSolutionVersion" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignCampaignConfig.property.syncWithLatestSolutionVersion"></a>

```typescript
public readonly syncWithLatestSolutionVersion: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Whether the campaign automatically updates to use the latest solution version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/personalize_campaign#sync_with_latest_solution_version PersonalizeCampaign#sync_with_latest_solution_version}

---

### PersonalizeCampaignConfig <a name="PersonalizeCampaignConfig" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignConfig.Initializer"></a>

```typescript
import { personalizeCampaign } from '@cdktn/provider-awscc'

const personalizeCampaignConfig: personalizeCampaign.PersonalizeCampaignConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignConfig.property.name">name</a></code> | <code>string</code> | The name of the campaign. |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignConfig.property.solutionVersionArn">solutionVersionArn</a></code> | <code>string</code> | The ARN of the solution version to deploy. |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignConfig.property.campaignConfig">campaignConfig</a></code> | <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignCampaignConfig">PersonalizeCampaignCampaignConfig</a></code> | The configuration details of a campaign. |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignConfig.property.minProvisionedTps">minProvisionedTps</a></code> | <code>number</code> | Specifies the requested minimum provisioned transactions per second. |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignTags">PersonalizeCampaignTags</a>[]</code> | Tags to associate with the campaign. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the campaign.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/personalize_campaign#name PersonalizeCampaign#name}

---

##### `solutionVersionArn`<sup>Required</sup> <a name="solutionVersionArn" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignConfig.property.solutionVersionArn"></a>

```typescript
public readonly solutionVersionArn: string;
```

- *Type:* string

The ARN of the solution version to deploy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/personalize_campaign#solution_version_arn PersonalizeCampaign#solution_version_arn}

---

##### `campaignConfig`<sup>Optional</sup> <a name="campaignConfig" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignConfig.property.campaignConfig"></a>

```typescript
public readonly campaignConfig: PersonalizeCampaignCampaignConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignCampaignConfig">PersonalizeCampaignCampaignConfig</a>

The configuration details of a campaign.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/personalize_campaign#campaign_config PersonalizeCampaign#campaign_config}

---

##### `minProvisionedTps`<sup>Optional</sup> <a name="minProvisionedTps" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignConfig.property.minProvisionedTps"></a>

```typescript
public readonly minProvisionedTps: number;
```

- *Type:* number

Specifies the requested minimum provisioned transactions per second.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/personalize_campaign#min_provisioned_tps PersonalizeCampaign#min_provisioned_tps}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | PersonalizeCampaignTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignTags">PersonalizeCampaignTags</a>[]

Tags to associate with the campaign.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/personalize_campaign#tags PersonalizeCampaign#tags}

---

### PersonalizeCampaignTags <a name="PersonalizeCampaignTags" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignTags.Initializer"></a>

```typescript
import { personalizeCampaign } from '@cdktn/provider-awscc'

const personalizeCampaignTags: personalizeCampaign.PersonalizeCampaignTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignTags.property.key">key</a></code> | <code>string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignTags.property.value">value</a></code> | <code>string</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

The key name of the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/personalize_campaign#key PersonalizeCampaign#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

The value for the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/personalize_campaign#value PersonalizeCampaign#value}

---

## Classes <a name="Classes" id="Classes"></a>

### PersonalizeCampaignCampaignConfigOutputReference <a name="PersonalizeCampaignCampaignConfigOutputReference" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignCampaignConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignCampaignConfigOutputReference.Initializer"></a>

```typescript
import { personalizeCampaign } from '@cdktn/provider-awscc'

new personalizeCampaign.PersonalizeCampaignCampaignConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignCampaignConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignCampaignConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignCampaignConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignCampaignConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignCampaignConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignCampaignConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignCampaignConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignCampaignConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignCampaignConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignCampaignConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignCampaignConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignCampaignConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignCampaignConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignCampaignConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignCampaignConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignCampaignConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignCampaignConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignCampaignConfigOutputReference.resetEnableMetadataWithRecommendations">resetEnableMetadataWithRecommendations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignCampaignConfigOutputReference.resetItemExplorationConfig">resetItemExplorationConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignCampaignConfigOutputReference.resetRankingInfluence">resetRankingInfluence</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignCampaignConfigOutputReference.resetSyncWithLatestSolutionVersion">resetSyncWithLatestSolutionVersion</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignCampaignConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignCampaignConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignCampaignConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignCampaignConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignCampaignConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignCampaignConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignCampaignConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignCampaignConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignCampaignConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignCampaignConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignCampaignConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignCampaignConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignCampaignConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignCampaignConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignCampaignConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignCampaignConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignCampaignConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignCampaignConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignCampaignConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignCampaignConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignCampaignConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignCampaignConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignCampaignConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignCampaignConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEnableMetadataWithRecommendations` <a name="resetEnableMetadataWithRecommendations" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignCampaignConfigOutputReference.resetEnableMetadataWithRecommendations"></a>

```typescript
public resetEnableMetadataWithRecommendations(): void
```

##### `resetItemExplorationConfig` <a name="resetItemExplorationConfig" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignCampaignConfigOutputReference.resetItemExplorationConfig"></a>

```typescript
public resetItemExplorationConfig(): void
```

##### `resetRankingInfluence` <a name="resetRankingInfluence" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignCampaignConfigOutputReference.resetRankingInfluence"></a>

```typescript
public resetRankingInfluence(): void
```

##### `resetSyncWithLatestSolutionVersion` <a name="resetSyncWithLatestSolutionVersion" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignCampaignConfigOutputReference.resetSyncWithLatestSolutionVersion"></a>

```typescript
public resetSyncWithLatestSolutionVersion(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignCampaignConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignCampaignConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignCampaignConfigOutputReference.property.enableMetadataWithRecommendationsInput">enableMetadataWithRecommendationsInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignCampaignConfigOutputReference.property.itemExplorationConfigInput">itemExplorationConfigInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignCampaignConfigOutputReference.property.rankingInfluenceInput">rankingInfluenceInput</a></code> | <code>{[ key: string ]: number}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignCampaignConfigOutputReference.property.syncWithLatestSolutionVersionInput">syncWithLatestSolutionVersionInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignCampaignConfigOutputReference.property.enableMetadataWithRecommendations">enableMetadataWithRecommendations</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignCampaignConfigOutputReference.property.itemExplorationConfig">itemExplorationConfig</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignCampaignConfigOutputReference.property.rankingInfluence">rankingInfluence</a></code> | <code>{[ key: string ]: number}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignCampaignConfigOutputReference.property.syncWithLatestSolutionVersion">syncWithLatestSolutionVersion</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignCampaignConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignCampaignConfig">PersonalizeCampaignCampaignConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignCampaignConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignCampaignConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `enableMetadataWithRecommendationsInput`<sup>Optional</sup> <a name="enableMetadataWithRecommendationsInput" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignCampaignConfigOutputReference.property.enableMetadataWithRecommendationsInput"></a>

```typescript
public readonly enableMetadataWithRecommendationsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `itemExplorationConfigInput`<sup>Optional</sup> <a name="itemExplorationConfigInput" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignCampaignConfigOutputReference.property.itemExplorationConfigInput"></a>

```typescript
public readonly itemExplorationConfigInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `rankingInfluenceInput`<sup>Optional</sup> <a name="rankingInfluenceInput" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignCampaignConfigOutputReference.property.rankingInfluenceInput"></a>

```typescript
public readonly rankingInfluenceInput: {[ key: string ]: number};
```

- *Type:* {[ key: string ]: number}

---

##### `syncWithLatestSolutionVersionInput`<sup>Optional</sup> <a name="syncWithLatestSolutionVersionInput" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignCampaignConfigOutputReference.property.syncWithLatestSolutionVersionInput"></a>

```typescript
public readonly syncWithLatestSolutionVersionInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `enableMetadataWithRecommendations`<sup>Required</sup> <a name="enableMetadataWithRecommendations" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignCampaignConfigOutputReference.property.enableMetadataWithRecommendations"></a>

```typescript
public readonly enableMetadataWithRecommendations: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `itemExplorationConfig`<sup>Required</sup> <a name="itemExplorationConfig" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignCampaignConfigOutputReference.property.itemExplorationConfig"></a>

```typescript
public readonly itemExplorationConfig: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `rankingInfluence`<sup>Required</sup> <a name="rankingInfluence" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignCampaignConfigOutputReference.property.rankingInfluence"></a>

```typescript
public readonly rankingInfluence: {[ key: string ]: number};
```

- *Type:* {[ key: string ]: number}

---

##### `syncWithLatestSolutionVersion`<sup>Required</sup> <a name="syncWithLatestSolutionVersion" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignCampaignConfigOutputReference.property.syncWithLatestSolutionVersion"></a>

```typescript
public readonly syncWithLatestSolutionVersion: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignCampaignConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | PersonalizeCampaignCampaignConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignCampaignConfig">PersonalizeCampaignCampaignConfig</a>

---


### PersonalizeCampaignTagsList <a name="PersonalizeCampaignTagsList" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignTagsList.Initializer"></a>

```typescript
import { personalizeCampaign } from '@cdktn/provider-awscc'

new personalizeCampaign.PersonalizeCampaignTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignTagsList.get"></a>

```typescript
public get(index: number): PersonalizeCampaignTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignTags">PersonalizeCampaignTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | PersonalizeCampaignTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignTags">PersonalizeCampaignTags</a>[]

---


### PersonalizeCampaignTagsOutputReference <a name="PersonalizeCampaignTagsOutputReference" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignTagsOutputReference.Initializer"></a>

```typescript
import { personalizeCampaign } from '@cdktn/provider-awscc'

new personalizeCampaign.PersonalizeCampaignTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignTags">PersonalizeCampaignTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | PersonalizeCampaignTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.personalizeCampaign.PersonalizeCampaignTags">PersonalizeCampaignTags</a>

---




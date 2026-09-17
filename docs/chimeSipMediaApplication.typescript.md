# `chimeSipMediaApplication` Submodule <a name="`chimeSipMediaApplication` Submodule" id="@cdktn/provider-awscc.chimeSipMediaApplication"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ChimeSipMediaApplication <a name="ChimeSipMediaApplication" id="@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplication"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/chime_sip_media_application awscc_chime_sip_media_application}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplication.Initializer"></a>

```typescript
import { chimeSipMediaApplication } from '@cdktn/provider-awscc'

new chimeSipMediaApplication.ChimeSipMediaApplication(scope: Construct, id: string, config: ChimeSipMediaApplicationConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplication.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplication.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplication.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplicationConfig">ChimeSipMediaApplicationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplication.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplication.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplication.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplicationConfig">ChimeSipMediaApplicationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplication.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplication.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplication.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplication.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplication.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplication.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplication.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplication.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplication.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplication.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplication.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplication.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplication.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplication.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplication.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplication.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplication.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplication.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplication.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplication.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplication.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplication.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplication.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplication.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplication.putEndpoints">putEndpoints</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplication.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplication.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplication.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplication.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplication.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplication.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplication.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplication.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplication.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplication.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplication.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplication.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplication.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplication.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplication.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplication.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplication.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplication.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplication.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplication.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplication.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplication.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplication.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplication.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplication.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplication.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplication.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplication.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplication.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplication.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplication.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplication.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplication.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplication.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplication.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplication.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplication.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplication.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplication.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplication.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplication.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplication.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplication.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplication.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplication.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplication.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplication.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putEndpoints` <a name="putEndpoints" id="@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplication.putEndpoints"></a>

```typescript
public putEndpoints(value: IResolvable | ChimeSipMediaApplicationEndpoints[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplication.putEndpoints.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplicationEndpoints">ChimeSipMediaApplicationEndpoints</a>[]

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplication.putTags"></a>

```typescript
public putTags(value: IResolvable | ChimeSipMediaApplicationTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplication.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplicationTags">ChimeSipMediaApplicationTags</a>[]

---

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplication.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplication.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplication.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplication.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplication.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a ChimeSipMediaApplication resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplication.isConstruct"></a>

```typescript
import { chimeSipMediaApplication } from '@cdktn/provider-awscc'

chimeSipMediaApplication.ChimeSipMediaApplication.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplication.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplication.isTerraformElement"></a>

```typescript
import { chimeSipMediaApplication } from '@cdktn/provider-awscc'

chimeSipMediaApplication.ChimeSipMediaApplication.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplication.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplication.isTerraformResource"></a>

```typescript
import { chimeSipMediaApplication } from '@cdktn/provider-awscc'

chimeSipMediaApplication.ChimeSipMediaApplication.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplication.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplication.generateConfigForImport"></a>

```typescript
import { chimeSipMediaApplication } from '@cdktn/provider-awscc'

chimeSipMediaApplication.ChimeSipMediaApplication.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a ChimeSipMediaApplication resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplication.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplication.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ChimeSipMediaApplication to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplication.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ChimeSipMediaApplication that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/chime_sip_media_application#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplication.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the ChimeSipMediaApplication to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplication.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplication.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplication.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplication.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplication.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplication.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplication.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplication.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplication.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplication.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplication.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplication.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplication.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplication.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplication.property.createdTimestamp">createdTimestamp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplication.property.endpoints">endpoints</a></code> | <code><a href="#@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplicationEndpointsList">ChimeSipMediaApplicationEndpointsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplication.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplication.property.sipMediaApplicationArn">sipMediaApplicationArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplication.property.sipMediaApplicationId">sipMediaApplicationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplication.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplicationTagsList">ChimeSipMediaApplicationTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplication.property.updatedTimestamp">updatedTimestamp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplication.property.awsRegionInput">awsRegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplication.property.endpointsInput">endpointsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplicationEndpoints">ChimeSipMediaApplicationEndpoints</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplication.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplication.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplicationTags">ChimeSipMediaApplicationTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplication.property.awsRegion">awsRegion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplication.property.name">name</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplication.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplication.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplication.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplication.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplication.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplication.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplication.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplication.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplication.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplication.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplication.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplication.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplication.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplication.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `createdTimestamp`<sup>Required</sup> <a name="createdTimestamp" id="@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplication.property.createdTimestamp"></a>

```typescript
public readonly createdTimestamp: string;
```

- *Type:* string

---

##### `endpoints`<sup>Required</sup> <a name="endpoints" id="@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplication.property.endpoints"></a>

```typescript
public readonly endpoints: ChimeSipMediaApplicationEndpointsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplicationEndpointsList">ChimeSipMediaApplicationEndpointsList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplication.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `sipMediaApplicationArn`<sup>Required</sup> <a name="sipMediaApplicationArn" id="@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplication.property.sipMediaApplicationArn"></a>

```typescript
public readonly sipMediaApplicationArn: string;
```

- *Type:* string

---

##### `sipMediaApplicationId`<sup>Required</sup> <a name="sipMediaApplicationId" id="@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplication.property.sipMediaApplicationId"></a>

```typescript
public readonly sipMediaApplicationId: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplication.property.tags"></a>

```typescript
public readonly tags: ChimeSipMediaApplicationTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplicationTagsList">ChimeSipMediaApplicationTagsList</a>

---

##### `updatedTimestamp`<sup>Required</sup> <a name="updatedTimestamp" id="@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplication.property.updatedTimestamp"></a>

```typescript
public readonly updatedTimestamp: string;
```

- *Type:* string

---

##### `awsRegionInput`<sup>Optional</sup> <a name="awsRegionInput" id="@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplication.property.awsRegionInput"></a>

```typescript
public readonly awsRegionInput: string;
```

- *Type:* string

---

##### `endpointsInput`<sup>Optional</sup> <a name="endpointsInput" id="@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplication.property.endpointsInput"></a>

```typescript
public readonly endpointsInput: IResolvable | ChimeSipMediaApplicationEndpoints[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplicationEndpoints">ChimeSipMediaApplicationEndpoints</a>[]

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplication.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplication.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | ChimeSipMediaApplicationTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplicationTags">ChimeSipMediaApplicationTags</a>[]

---

##### `awsRegion`<sup>Required</sup> <a name="awsRegion" id="@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplication.property.awsRegion"></a>

```typescript
public readonly awsRegion: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplication.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplication.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplication.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ChimeSipMediaApplicationConfig <a name="ChimeSipMediaApplicationConfig" id="@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplicationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplicationConfig.Initializer"></a>

```typescript
import { chimeSipMediaApplication } from '@cdktn/provider-awscc'

const chimeSipMediaApplicationConfig: chimeSipMediaApplication.ChimeSipMediaApplicationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplicationConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplicationConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplicationConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplicationConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplicationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplicationConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplicationConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplicationConfig.property.awsRegion">awsRegion</a></code> | <code>string</code> | The AWS Region in which the SIP media application is created. |
| <code><a href="#@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplicationConfig.property.endpoints">endpoints</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplicationEndpoints">ChimeSipMediaApplicationEndpoints</a>[]</code> | List of endpoints (Lambda ARNs) specified for the SIP media application. |
| <code><a href="#@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplicationConfig.property.name">name</a></code> | <code>string</code> | The name of the SIP media application. |
| <code><a href="#@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplicationConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplicationTags">ChimeSipMediaApplicationTags</a>[]</code> | Tags assigned to the SIP media application. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplicationConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplicationConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplicationConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplicationConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplicationConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplicationConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplicationConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `awsRegion`<sup>Required</sup> <a name="awsRegion" id="@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplicationConfig.property.awsRegion"></a>

```typescript
public readonly awsRegion: string;
```

- *Type:* string

The AWS Region in which the SIP media application is created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/chime_sip_media_application#aws_region ChimeSipMediaApplication#aws_region}

---

##### `endpoints`<sup>Required</sup> <a name="endpoints" id="@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplicationConfig.property.endpoints"></a>

```typescript
public readonly endpoints: IResolvable | ChimeSipMediaApplicationEndpoints[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplicationEndpoints">ChimeSipMediaApplicationEndpoints</a>[]

List of endpoints (Lambda ARNs) specified for the SIP media application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/chime_sip_media_application#endpoints ChimeSipMediaApplication#endpoints}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplicationConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the SIP media application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/chime_sip_media_application#name ChimeSipMediaApplication#name}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplicationConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | ChimeSipMediaApplicationTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplicationTags">ChimeSipMediaApplicationTags</a>[]

Tags assigned to the SIP media application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/chime_sip_media_application#tags ChimeSipMediaApplication#tags}

---

### ChimeSipMediaApplicationEndpoints <a name="ChimeSipMediaApplicationEndpoints" id="@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplicationEndpoints"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplicationEndpoints.Initializer"></a>

```typescript
import { chimeSipMediaApplication } from '@cdktn/provider-awscc'

const chimeSipMediaApplicationEndpoints: chimeSipMediaApplication.ChimeSipMediaApplicationEndpoints = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplicationEndpoints.property.lambdaArn">lambdaArn</a></code> | <code>string</code> | Valid Amazon Resource Name (ARN) of the Lambda function. |

---

##### `lambdaArn`<sup>Required</sup> <a name="lambdaArn" id="@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplicationEndpoints.property.lambdaArn"></a>

```typescript
public readonly lambdaArn: string;
```

- *Type:* string

Valid Amazon Resource Name (ARN) of the Lambda function.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/chime_sip_media_application#lambda_arn ChimeSipMediaApplication#lambda_arn}

---

### ChimeSipMediaApplicationTags <a name="ChimeSipMediaApplicationTags" id="@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplicationTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplicationTags.Initializer"></a>

```typescript
import { chimeSipMediaApplication } from '@cdktn/provider-awscc'

const chimeSipMediaApplicationTags: chimeSipMediaApplication.ChimeSipMediaApplicationTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplicationTags.property.key">key</a></code> | <code>string</code> | The tag key. |
| <code><a href="#@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplicationTags.property.value">value</a></code> | <code>string</code> | The tag value. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplicationTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

The tag key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/chime_sip_media_application#key ChimeSipMediaApplication#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplicationTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

The tag value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/chime_sip_media_application#value ChimeSipMediaApplication#value}

---

## Classes <a name="Classes" id="Classes"></a>

### ChimeSipMediaApplicationEndpointsList <a name="ChimeSipMediaApplicationEndpointsList" id="@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplicationEndpointsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplicationEndpointsList.Initializer"></a>

```typescript
import { chimeSipMediaApplication } from '@cdktn/provider-awscc'

new chimeSipMediaApplication.ChimeSipMediaApplicationEndpointsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplicationEndpointsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplicationEndpointsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplicationEndpointsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplicationEndpointsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplicationEndpointsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplicationEndpointsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplicationEndpointsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplicationEndpointsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplicationEndpointsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplicationEndpointsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplicationEndpointsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplicationEndpointsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplicationEndpointsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplicationEndpointsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplicationEndpointsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplicationEndpointsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplicationEndpointsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplicationEndpointsList.get"></a>

```typescript
public get(index: number): ChimeSipMediaApplicationEndpointsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplicationEndpointsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplicationEndpointsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplicationEndpointsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplicationEndpointsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplicationEndpoints">ChimeSipMediaApplicationEndpoints</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplicationEndpointsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplicationEndpointsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplicationEndpointsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ChimeSipMediaApplicationEndpoints[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplicationEndpoints">ChimeSipMediaApplicationEndpoints</a>[]

---


### ChimeSipMediaApplicationEndpointsOutputReference <a name="ChimeSipMediaApplicationEndpointsOutputReference" id="@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplicationEndpointsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplicationEndpointsOutputReference.Initializer"></a>

```typescript
import { chimeSipMediaApplication } from '@cdktn/provider-awscc'

new chimeSipMediaApplication.ChimeSipMediaApplicationEndpointsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplicationEndpointsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplicationEndpointsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplicationEndpointsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplicationEndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplicationEndpointsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplicationEndpointsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplicationEndpointsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplicationEndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplicationEndpointsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplicationEndpointsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplicationEndpointsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplicationEndpointsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplicationEndpointsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplicationEndpointsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplicationEndpointsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplicationEndpointsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplicationEndpointsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplicationEndpointsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplicationEndpointsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplicationEndpointsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplicationEndpointsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplicationEndpointsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplicationEndpointsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplicationEndpointsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplicationEndpointsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplicationEndpointsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplicationEndpointsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplicationEndpointsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplicationEndpointsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplicationEndpointsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplicationEndpointsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplicationEndpointsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplicationEndpointsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplicationEndpointsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplicationEndpointsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplicationEndpointsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplicationEndpointsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplicationEndpointsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplicationEndpointsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplicationEndpointsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplicationEndpointsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplicationEndpointsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplicationEndpointsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplicationEndpointsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplicationEndpointsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplicationEndpointsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplicationEndpointsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplicationEndpointsOutputReference.property.lambdaArnInput">lambdaArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplicationEndpointsOutputReference.property.lambdaArn">lambdaArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplicationEndpointsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplicationEndpoints">ChimeSipMediaApplicationEndpoints</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplicationEndpointsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplicationEndpointsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `lambdaArnInput`<sup>Optional</sup> <a name="lambdaArnInput" id="@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplicationEndpointsOutputReference.property.lambdaArnInput"></a>

```typescript
public readonly lambdaArnInput: string;
```

- *Type:* string

---

##### `lambdaArn`<sup>Required</sup> <a name="lambdaArn" id="@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplicationEndpointsOutputReference.property.lambdaArn"></a>

```typescript
public readonly lambdaArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplicationEndpointsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ChimeSipMediaApplicationEndpoints;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplicationEndpoints">ChimeSipMediaApplicationEndpoints</a>

---


### ChimeSipMediaApplicationTagsList <a name="ChimeSipMediaApplicationTagsList" id="@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplicationTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplicationTagsList.Initializer"></a>

```typescript
import { chimeSipMediaApplication } from '@cdktn/provider-awscc'

new chimeSipMediaApplication.ChimeSipMediaApplicationTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplicationTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplicationTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplicationTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplicationTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplicationTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplicationTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplicationTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplicationTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplicationTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplicationTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplicationTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplicationTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplicationTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplicationTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplicationTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplicationTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplicationTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplicationTagsList.get"></a>

```typescript
public get(index: number): ChimeSipMediaApplicationTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplicationTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplicationTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplicationTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplicationTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplicationTags">ChimeSipMediaApplicationTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplicationTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplicationTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplicationTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ChimeSipMediaApplicationTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplicationTags">ChimeSipMediaApplicationTags</a>[]

---


### ChimeSipMediaApplicationTagsOutputReference <a name="ChimeSipMediaApplicationTagsOutputReference" id="@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplicationTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplicationTagsOutputReference.Initializer"></a>

```typescript
import { chimeSipMediaApplication } from '@cdktn/provider-awscc'

new chimeSipMediaApplication.ChimeSipMediaApplicationTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplicationTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplicationTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplicationTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplicationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplicationTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplicationTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplicationTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplicationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplicationTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplicationTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplicationTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplicationTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplicationTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplicationTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplicationTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplicationTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplicationTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplicationTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplicationTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplicationTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplicationTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplicationTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplicationTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplicationTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplicationTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplicationTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplicationTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplicationTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplicationTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplicationTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplicationTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplicationTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplicationTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplicationTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplicationTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplicationTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplicationTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplicationTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplicationTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplicationTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplicationTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplicationTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplicationTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplicationTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplicationTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplicationTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplicationTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplicationTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplicationTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplicationTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplicationTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplicationTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplicationTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplicationTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplicationTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplicationTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplicationTags">ChimeSipMediaApplicationTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplicationTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplicationTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplicationTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplicationTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplicationTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplicationTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplicationTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ChimeSipMediaApplicationTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.chimeSipMediaApplication.ChimeSipMediaApplicationTags">ChimeSipMediaApplicationTags</a>

---




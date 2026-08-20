# `sesMailManagerTrafficPolicy` Submodule <a name="`sesMailManagerTrafficPolicy` Submodule" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SesMailManagerTrafficPolicy <a name="SesMailManagerTrafficPolicy" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ses_mail_manager_traffic_policy awscc_ses_mail_manager_traffic_policy}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicy.Initializer"></a>

```typescript
import { sesMailManagerTrafficPolicy } from '@cdktn/provider-awscc'

new sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicy(scope: Construct, id: string, config: SesMailManagerTrafficPolicyConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicy.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicy.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyConfig">SesMailManagerTrafficPolicyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicy.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyConfig">SesMailManagerTrafficPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicy.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicy.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicy.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicy.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicy.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicy.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicy.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicy.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicy.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicy.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicy.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicy.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicy.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicy.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicy.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicy.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicy.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicy.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicy.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicy.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicy.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicy.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicy.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicy.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicy.putPolicyStatements">putPolicyStatements</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicy.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicy.resetMaxMessageSizeBytes">resetMaxMessageSizeBytes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicy.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicy.resetTrafficPolicyName">resetTrafficPolicyName</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicy.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicy.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicy.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicy.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicy.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicy.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicy.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicy.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicy.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicy.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicy.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicy.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicy.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicy.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicy.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicy.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicy.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicy.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicy.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicy.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicy.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicy.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicy.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicy.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicy.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicy.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicy.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicy.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicy.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicy.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicy.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicy.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putPolicyStatements` <a name="putPolicyStatements" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicy.putPolicyStatements"></a>

```typescript
public putPolicyStatements(value: IResolvable | SesMailManagerTrafficPolicyPolicyStatements[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicy.putPolicyStatements.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatements">SesMailManagerTrafficPolicyPolicyStatements</a>[]

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicy.putTags"></a>

```typescript
public putTags(value: IResolvable | SesMailManagerTrafficPolicyTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicy.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyTags">SesMailManagerTrafficPolicyTags</a>[]

---

##### `resetMaxMessageSizeBytes` <a name="resetMaxMessageSizeBytes" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicy.resetMaxMessageSizeBytes"></a>

```typescript
public resetMaxMessageSizeBytes(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicy.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTrafficPolicyName` <a name="resetTrafficPolicyName" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicy.resetTrafficPolicyName"></a>

```typescript
public resetTrafficPolicyName(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicy.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicy.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicy.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicy.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a SesMailManagerTrafficPolicy resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicy.isConstruct"></a>

```typescript
import { sesMailManagerTrafficPolicy } from '@cdktn/provider-awscc'

sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicy.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicy.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicy.isTerraformElement"></a>

```typescript
import { sesMailManagerTrafficPolicy } from '@cdktn/provider-awscc'

sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicy.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicy.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicy.isTerraformResource"></a>

```typescript
import { sesMailManagerTrafficPolicy } from '@cdktn/provider-awscc'

sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicy.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicy.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicy.generateConfigForImport"></a>

```typescript
import { sesMailManagerTrafficPolicy } from '@cdktn/provider-awscc'

sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicy.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a SesMailManagerTrafficPolicy resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the SesMailManagerTrafficPolicy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing SesMailManagerTrafficPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ses_mail_manager_traffic_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the SesMailManagerTrafficPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicy.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicy.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicy.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicy.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicy.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicy.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicy.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicy.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicy.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicy.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicy.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicy.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicy.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicy.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicy.property.policyStatements">policyStatements</a></code> | <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsList">SesMailManagerTrafficPolicyPolicyStatementsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicy.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyTagsList">SesMailManagerTrafficPolicyTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicy.property.trafficPolicyArn">trafficPolicyArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicy.property.trafficPolicyId">trafficPolicyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicy.property.defaultActionInput">defaultActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicy.property.maxMessageSizeBytesInput">maxMessageSizeBytesInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicy.property.policyStatementsInput">policyStatementsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatements">SesMailManagerTrafficPolicyPolicyStatements</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicy.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyTags">SesMailManagerTrafficPolicyTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicy.property.trafficPolicyNameInput">trafficPolicyNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicy.property.defaultAction">defaultAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicy.property.maxMessageSizeBytes">maxMessageSizeBytes</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicy.property.trafficPolicyName">trafficPolicyName</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicy.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicy.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicy.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicy.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicy.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicy.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicy.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicy.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicy.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicy.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicy.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicy.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicy.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicy.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicy.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `policyStatements`<sup>Required</sup> <a name="policyStatements" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicy.property.policyStatements"></a>

```typescript
public readonly policyStatements: SesMailManagerTrafficPolicyPolicyStatementsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsList">SesMailManagerTrafficPolicyPolicyStatementsList</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicy.property.tags"></a>

```typescript
public readonly tags: SesMailManagerTrafficPolicyTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyTagsList">SesMailManagerTrafficPolicyTagsList</a>

---

##### `trafficPolicyArn`<sup>Required</sup> <a name="trafficPolicyArn" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicy.property.trafficPolicyArn"></a>

```typescript
public readonly trafficPolicyArn: string;
```

- *Type:* string

---

##### `trafficPolicyId`<sup>Required</sup> <a name="trafficPolicyId" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicy.property.trafficPolicyId"></a>

```typescript
public readonly trafficPolicyId: string;
```

- *Type:* string

---

##### `defaultActionInput`<sup>Optional</sup> <a name="defaultActionInput" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicy.property.defaultActionInput"></a>

```typescript
public readonly defaultActionInput: string;
```

- *Type:* string

---

##### `maxMessageSizeBytesInput`<sup>Optional</sup> <a name="maxMessageSizeBytesInput" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicy.property.maxMessageSizeBytesInput"></a>

```typescript
public readonly maxMessageSizeBytesInput: number;
```

- *Type:* number

---

##### `policyStatementsInput`<sup>Optional</sup> <a name="policyStatementsInput" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicy.property.policyStatementsInput"></a>

```typescript
public readonly policyStatementsInput: IResolvable | SesMailManagerTrafficPolicyPolicyStatements[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatements">SesMailManagerTrafficPolicyPolicyStatements</a>[]

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicy.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | SesMailManagerTrafficPolicyTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyTags">SesMailManagerTrafficPolicyTags</a>[]

---

##### `trafficPolicyNameInput`<sup>Optional</sup> <a name="trafficPolicyNameInput" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicy.property.trafficPolicyNameInput"></a>

```typescript
public readonly trafficPolicyNameInput: string;
```

- *Type:* string

---

##### `defaultAction`<sup>Required</sup> <a name="defaultAction" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicy.property.defaultAction"></a>

```typescript
public readonly defaultAction: string;
```

- *Type:* string

---

##### `maxMessageSizeBytes`<sup>Required</sup> <a name="maxMessageSizeBytes" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicy.property.maxMessageSizeBytes"></a>

```typescript
public readonly maxMessageSizeBytes: number;
```

- *Type:* number

---

##### `trafficPolicyName`<sup>Required</sup> <a name="trafficPolicyName" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicy.property.trafficPolicyName"></a>

```typescript
public readonly trafficPolicyName: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicy.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicy.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SesMailManagerTrafficPolicyConfig <a name="SesMailManagerTrafficPolicyConfig" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyConfig.Initializer"></a>

```typescript
import { sesMailManagerTrafficPolicy } from '@cdktn/provider-awscc'

const sesMailManagerTrafficPolicyConfig: sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyConfig.property.defaultAction">defaultAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ses_mail_manager_traffic_policy#default_action SesMailManagerTrafficPolicy#default_action}. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyConfig.property.policyStatements">policyStatements</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatements">SesMailManagerTrafficPolicyPolicyStatements</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ses_mail_manager_traffic_policy#policy_statements SesMailManagerTrafficPolicy#policy_statements}. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyConfig.property.maxMessageSizeBytes">maxMessageSizeBytes</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ses_mail_manager_traffic_policy#max_message_size_bytes SesMailManagerTrafficPolicy#max_message_size_bytes}. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyTags">SesMailManagerTrafficPolicyTags</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ses_mail_manager_traffic_policy#tags SesMailManagerTrafficPolicy#tags}. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyConfig.property.trafficPolicyName">trafficPolicyName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ses_mail_manager_traffic_policy#traffic_policy_name SesMailManagerTrafficPolicy#traffic_policy_name}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `defaultAction`<sup>Required</sup> <a name="defaultAction" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyConfig.property.defaultAction"></a>

```typescript
public readonly defaultAction: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ses_mail_manager_traffic_policy#default_action SesMailManagerTrafficPolicy#default_action}.

---

##### `policyStatements`<sup>Required</sup> <a name="policyStatements" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyConfig.property.policyStatements"></a>

```typescript
public readonly policyStatements: IResolvable | SesMailManagerTrafficPolicyPolicyStatements[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatements">SesMailManagerTrafficPolicyPolicyStatements</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ses_mail_manager_traffic_policy#policy_statements SesMailManagerTrafficPolicy#policy_statements}.

---

##### `maxMessageSizeBytes`<sup>Optional</sup> <a name="maxMessageSizeBytes" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyConfig.property.maxMessageSizeBytes"></a>

```typescript
public readonly maxMessageSizeBytes: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ses_mail_manager_traffic_policy#max_message_size_bytes SesMailManagerTrafficPolicy#max_message_size_bytes}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | SesMailManagerTrafficPolicyTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyTags">SesMailManagerTrafficPolicyTags</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ses_mail_manager_traffic_policy#tags SesMailManagerTrafficPolicy#tags}.

---

##### `trafficPolicyName`<sup>Optional</sup> <a name="trafficPolicyName" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyConfig.property.trafficPolicyName"></a>

```typescript
public readonly trafficPolicyName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ses_mail_manager_traffic_policy#traffic_policy_name SesMailManagerTrafficPolicy#traffic_policy_name}.

---

### SesMailManagerTrafficPolicyPolicyStatements <a name="SesMailManagerTrafficPolicyPolicyStatements" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatements"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatements.Initializer"></a>

```typescript
import { sesMailManagerTrafficPolicy } from '@cdktn/provider-awscc'

const sesMailManagerTrafficPolicyPolicyStatements: sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatements = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatements.property.action">action</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ses_mail_manager_traffic_policy#action SesMailManagerTrafficPolicy#action}. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatements.property.conditions">conditions</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditions">SesMailManagerTrafficPolicyPolicyStatementsConditions</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ses_mail_manager_traffic_policy#conditions SesMailManagerTrafficPolicy#conditions}. |

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatements.property.action"></a>

```typescript
public readonly action: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ses_mail_manager_traffic_policy#action SesMailManagerTrafficPolicy#action}.

---

##### `conditions`<sup>Required</sup> <a name="conditions" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatements.property.conditions"></a>

```typescript
public readonly conditions: IResolvable | SesMailManagerTrafficPolicyPolicyStatementsConditions[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditions">SesMailManagerTrafficPolicyPolicyStatementsConditions</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ses_mail_manager_traffic_policy#conditions SesMailManagerTrafficPolicy#conditions}.

---

### SesMailManagerTrafficPolicyPolicyStatementsConditions <a name="SesMailManagerTrafficPolicyPolicyStatementsConditions" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditions.Initializer"></a>

```typescript
import { sesMailManagerTrafficPolicy } from '@cdktn/provider-awscc'

const sesMailManagerTrafficPolicyPolicyStatementsConditions: sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditions.property.booleanExpression">booleanExpression</a></code> | <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpression">SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpression</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ses_mail_manager_traffic_policy#boolean_expression SesMailManagerTrafficPolicy#boolean_expression}. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditions.property.ipExpression">ipExpression</a></code> | <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpression">SesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpression</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ses_mail_manager_traffic_policy#ip_expression SesMailManagerTrafficPolicy#ip_expression}. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditions.property.ipv6Expression">ipv6Expression</a></code> | <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6Expression">SesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6Expression</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ses_mail_manager_traffic_policy#ipv_6_expression SesMailManagerTrafficPolicy#ipv_6_expression}. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditions.property.stringExpression">stringExpression</a></code> | <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpression">SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpression</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ses_mail_manager_traffic_policy#string_expression SesMailManagerTrafficPolicy#string_expression}. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditions.property.tlsExpression">tlsExpression</a></code> | <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpression">SesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpression</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ses_mail_manager_traffic_policy#tls_expression SesMailManagerTrafficPolicy#tls_expression}. |

---

##### `booleanExpression`<sup>Optional</sup> <a name="booleanExpression" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditions.property.booleanExpression"></a>

```typescript
public readonly booleanExpression: SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpression;
```

- *Type:* <a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpression">SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpression</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ses_mail_manager_traffic_policy#boolean_expression SesMailManagerTrafficPolicy#boolean_expression}.

---

##### `ipExpression`<sup>Optional</sup> <a name="ipExpression" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditions.property.ipExpression"></a>

```typescript
public readonly ipExpression: SesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpression;
```

- *Type:* <a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpression">SesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpression</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ses_mail_manager_traffic_policy#ip_expression SesMailManagerTrafficPolicy#ip_expression}.

---

##### `ipv6Expression`<sup>Optional</sup> <a name="ipv6Expression" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditions.property.ipv6Expression"></a>

```typescript
public readonly ipv6Expression: SesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6Expression;
```

- *Type:* <a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6Expression">SesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6Expression</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ses_mail_manager_traffic_policy#ipv_6_expression SesMailManagerTrafficPolicy#ipv_6_expression}.

---

##### `stringExpression`<sup>Optional</sup> <a name="stringExpression" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditions.property.stringExpression"></a>

```typescript
public readonly stringExpression: SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpression;
```

- *Type:* <a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpression">SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpression</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ses_mail_manager_traffic_policy#string_expression SesMailManagerTrafficPolicy#string_expression}.

---

##### `tlsExpression`<sup>Optional</sup> <a name="tlsExpression" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditions.property.tlsExpression"></a>

```typescript
public readonly tlsExpression: SesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpression;
```

- *Type:* <a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpression">SesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpression</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ses_mail_manager_traffic_policy#tls_expression SesMailManagerTrafficPolicy#tls_expression}.

---

### SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpression <a name="SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpression" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpression"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpression.Initializer"></a>

```typescript
import { sesMailManagerTrafficPolicy } from '@cdktn/provider-awscc'

const sesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpression: sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpression = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpression.property.evaluate">evaluate</a></code> | <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluate">SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluate</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ses_mail_manager_traffic_policy#evaluate SesMailManagerTrafficPolicy#evaluate}. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpression.property.operator">operator</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ses_mail_manager_traffic_policy#operator SesMailManagerTrafficPolicy#operator}. |

---

##### `evaluate`<sup>Optional</sup> <a name="evaluate" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpression.property.evaluate"></a>

```typescript
public readonly evaluate: SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluate;
```

- *Type:* <a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluate">SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluate</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ses_mail_manager_traffic_policy#evaluate SesMailManagerTrafficPolicy#evaluate}.

---

##### `operator`<sup>Optional</sup> <a name="operator" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpression.property.operator"></a>

```typescript
public readonly operator: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ses_mail_manager_traffic_policy#operator SesMailManagerTrafficPolicy#operator}.

---

### SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluate <a name="SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluate" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluate"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluate.Initializer"></a>

```typescript
import { sesMailManagerTrafficPolicy } from '@cdktn/provider-awscc'

const sesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluate: sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluate = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluate.property.analysis">analysis</a></code> | <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateAnalysis">SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateAnalysis</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ses_mail_manager_traffic_policy#analysis SesMailManagerTrafficPolicy#analysis}. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluate.property.isInAddressList">isInAddressList</a></code> | <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateIsInAddressListStruct">SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateIsInAddressListStruct</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ses_mail_manager_traffic_policy#is_in_address_list SesMailManagerTrafficPolicy#is_in_address_list}. |

---

##### `analysis`<sup>Optional</sup> <a name="analysis" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluate.property.analysis"></a>

```typescript
public readonly analysis: SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateAnalysis;
```

- *Type:* <a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateAnalysis">SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateAnalysis</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ses_mail_manager_traffic_policy#analysis SesMailManagerTrafficPolicy#analysis}.

---

##### `isInAddressList`<sup>Optional</sup> <a name="isInAddressList" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluate.property.isInAddressList"></a>

```typescript
public readonly isInAddressList: SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateIsInAddressListStruct;
```

- *Type:* <a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateIsInAddressListStruct">SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateIsInAddressListStruct</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ses_mail_manager_traffic_policy#is_in_address_list SesMailManagerTrafficPolicy#is_in_address_list}.

---

### SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateAnalysis <a name="SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateAnalysis" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateAnalysis"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateAnalysis.Initializer"></a>

```typescript
import { sesMailManagerTrafficPolicy } from '@cdktn/provider-awscc'

const sesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateAnalysis: sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateAnalysis = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateAnalysis.property.analyzer">analyzer</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ses_mail_manager_traffic_policy#analyzer SesMailManagerTrafficPolicy#analyzer}. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateAnalysis.property.resultField">resultField</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ses_mail_manager_traffic_policy#result_field SesMailManagerTrafficPolicy#result_field}. |

---

##### `analyzer`<sup>Optional</sup> <a name="analyzer" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateAnalysis.property.analyzer"></a>

```typescript
public readonly analyzer: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ses_mail_manager_traffic_policy#analyzer SesMailManagerTrafficPolicy#analyzer}.

---

##### `resultField`<sup>Optional</sup> <a name="resultField" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateAnalysis.property.resultField"></a>

```typescript
public readonly resultField: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ses_mail_manager_traffic_policy#result_field SesMailManagerTrafficPolicy#result_field}.

---

### SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateIsInAddressListStruct <a name="SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateIsInAddressListStruct" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateIsInAddressListStruct"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateIsInAddressListStruct.Initializer"></a>

```typescript
import { sesMailManagerTrafficPolicy } from '@cdktn/provider-awscc'

const sesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateIsInAddressListStruct: sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateIsInAddressListStruct = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateIsInAddressListStruct.property.addressLists">addressLists</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ses_mail_manager_traffic_policy#address_lists SesMailManagerTrafficPolicy#address_lists}. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateIsInAddressListStruct.property.attribute">attribute</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ses_mail_manager_traffic_policy#attribute SesMailManagerTrafficPolicy#attribute}. |

---

##### `addressLists`<sup>Optional</sup> <a name="addressLists" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateIsInAddressListStruct.property.addressLists"></a>

```typescript
public readonly addressLists: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ses_mail_manager_traffic_policy#address_lists SesMailManagerTrafficPolicy#address_lists}.

---

##### `attribute`<sup>Optional</sup> <a name="attribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateIsInAddressListStruct.property.attribute"></a>

```typescript
public readonly attribute: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ses_mail_manager_traffic_policy#attribute SesMailManagerTrafficPolicy#attribute}.

---

### SesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpression <a name="SesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpression" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpression"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpression.Initializer"></a>

```typescript
import { sesMailManagerTrafficPolicy } from '@cdktn/provider-awscc'

const sesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpression: sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpression = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpression.property.evaluate">evaluate</a></code> | <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionEvaluate">SesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionEvaluate</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ses_mail_manager_traffic_policy#evaluate SesMailManagerTrafficPolicy#evaluate}. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpression.property.operator">operator</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ses_mail_manager_traffic_policy#operator SesMailManagerTrafficPolicy#operator}. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpression.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ses_mail_manager_traffic_policy#values SesMailManagerTrafficPolicy#values}. |

---

##### `evaluate`<sup>Optional</sup> <a name="evaluate" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpression.property.evaluate"></a>

```typescript
public readonly evaluate: SesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionEvaluate;
```

- *Type:* <a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionEvaluate">SesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionEvaluate</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ses_mail_manager_traffic_policy#evaluate SesMailManagerTrafficPolicy#evaluate}.

---

##### `operator`<sup>Optional</sup> <a name="operator" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpression.property.operator"></a>

```typescript
public readonly operator: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ses_mail_manager_traffic_policy#operator SesMailManagerTrafficPolicy#operator}.

---

##### `values`<sup>Optional</sup> <a name="values" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpression.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ses_mail_manager_traffic_policy#values SesMailManagerTrafficPolicy#values}.

---

### SesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionEvaluate <a name="SesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionEvaluate" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionEvaluate"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionEvaluate.Initializer"></a>

```typescript
import { sesMailManagerTrafficPolicy } from '@cdktn/provider-awscc'

const sesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionEvaluate: sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionEvaluate = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionEvaluate.property.attribute">attribute</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ses_mail_manager_traffic_policy#attribute SesMailManagerTrafficPolicy#attribute}. |

---

##### `attribute`<sup>Optional</sup> <a name="attribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionEvaluate.property.attribute"></a>

```typescript
public readonly attribute: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ses_mail_manager_traffic_policy#attribute SesMailManagerTrafficPolicy#attribute}.

---

### SesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6Expression <a name="SesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6Expression" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6Expression"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6Expression.Initializer"></a>

```typescript
import { sesMailManagerTrafficPolicy } from '@cdktn/provider-awscc'

const sesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6Expression: sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6Expression = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6Expression.property.evaluate">evaluate</a></code> | <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionEvaluate">SesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionEvaluate</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ses_mail_manager_traffic_policy#evaluate SesMailManagerTrafficPolicy#evaluate}. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6Expression.property.operator">operator</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ses_mail_manager_traffic_policy#operator SesMailManagerTrafficPolicy#operator}. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6Expression.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ses_mail_manager_traffic_policy#values SesMailManagerTrafficPolicy#values}. |

---

##### `evaluate`<sup>Optional</sup> <a name="evaluate" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6Expression.property.evaluate"></a>

```typescript
public readonly evaluate: SesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionEvaluate;
```

- *Type:* <a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionEvaluate">SesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionEvaluate</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ses_mail_manager_traffic_policy#evaluate SesMailManagerTrafficPolicy#evaluate}.

---

##### `operator`<sup>Optional</sup> <a name="operator" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6Expression.property.operator"></a>

```typescript
public readonly operator: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ses_mail_manager_traffic_policy#operator SesMailManagerTrafficPolicy#operator}.

---

##### `values`<sup>Optional</sup> <a name="values" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6Expression.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ses_mail_manager_traffic_policy#values SesMailManagerTrafficPolicy#values}.

---

### SesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionEvaluate <a name="SesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionEvaluate" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionEvaluate"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionEvaluate.Initializer"></a>

```typescript
import { sesMailManagerTrafficPolicy } from '@cdktn/provider-awscc'

const sesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionEvaluate: sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionEvaluate = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionEvaluate.property.attribute">attribute</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ses_mail_manager_traffic_policy#attribute SesMailManagerTrafficPolicy#attribute}. |

---

##### `attribute`<sup>Optional</sup> <a name="attribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionEvaluate.property.attribute"></a>

```typescript
public readonly attribute: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ses_mail_manager_traffic_policy#attribute SesMailManagerTrafficPolicy#attribute}.

---

### SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpression <a name="SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpression" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpression"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpression.Initializer"></a>

```typescript
import { sesMailManagerTrafficPolicy } from '@cdktn/provider-awscc'

const sesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpression: sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpression = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpression.property.evaluate">evaluate</a></code> | <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluate">SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluate</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ses_mail_manager_traffic_policy#evaluate SesMailManagerTrafficPolicy#evaluate}. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpression.property.operator">operator</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ses_mail_manager_traffic_policy#operator SesMailManagerTrafficPolicy#operator}. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpression.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ses_mail_manager_traffic_policy#values SesMailManagerTrafficPolicy#values}. |

---

##### `evaluate`<sup>Optional</sup> <a name="evaluate" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpression.property.evaluate"></a>

```typescript
public readonly evaluate: SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluate;
```

- *Type:* <a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluate">SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluate</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ses_mail_manager_traffic_policy#evaluate SesMailManagerTrafficPolicy#evaluate}.

---

##### `operator`<sup>Optional</sup> <a name="operator" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpression.property.operator"></a>

```typescript
public readonly operator: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ses_mail_manager_traffic_policy#operator SesMailManagerTrafficPolicy#operator}.

---

##### `values`<sup>Optional</sup> <a name="values" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpression.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ses_mail_manager_traffic_policy#values SesMailManagerTrafficPolicy#values}.

---

### SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluate <a name="SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluate" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluate"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluate.Initializer"></a>

```typescript
import { sesMailManagerTrafficPolicy } from '@cdktn/provider-awscc'

const sesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluate: sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluate = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluate.property.analysis">analysis</a></code> | <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateAnalysis">SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateAnalysis</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ses_mail_manager_traffic_policy#analysis SesMailManagerTrafficPolicy#analysis}. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluate.property.attribute">attribute</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ses_mail_manager_traffic_policy#attribute SesMailManagerTrafficPolicy#attribute}. |

---

##### `analysis`<sup>Optional</sup> <a name="analysis" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluate.property.analysis"></a>

```typescript
public readonly analysis: SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateAnalysis;
```

- *Type:* <a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateAnalysis">SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateAnalysis</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ses_mail_manager_traffic_policy#analysis SesMailManagerTrafficPolicy#analysis}.

---

##### `attribute`<sup>Optional</sup> <a name="attribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluate.property.attribute"></a>

```typescript
public readonly attribute: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ses_mail_manager_traffic_policy#attribute SesMailManagerTrafficPolicy#attribute}.

---

### SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateAnalysis <a name="SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateAnalysis" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateAnalysis"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateAnalysis.Initializer"></a>

```typescript
import { sesMailManagerTrafficPolicy } from '@cdktn/provider-awscc'

const sesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateAnalysis: sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateAnalysis = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateAnalysis.property.analyzer">analyzer</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ses_mail_manager_traffic_policy#analyzer SesMailManagerTrafficPolicy#analyzer}. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateAnalysis.property.resultField">resultField</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ses_mail_manager_traffic_policy#result_field SesMailManagerTrafficPolicy#result_field}. |

---

##### `analyzer`<sup>Optional</sup> <a name="analyzer" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateAnalysis.property.analyzer"></a>

```typescript
public readonly analyzer: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ses_mail_manager_traffic_policy#analyzer SesMailManagerTrafficPolicy#analyzer}.

---

##### `resultField`<sup>Optional</sup> <a name="resultField" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateAnalysis.property.resultField"></a>

```typescript
public readonly resultField: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ses_mail_manager_traffic_policy#result_field SesMailManagerTrafficPolicy#result_field}.

---

### SesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpression <a name="SesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpression" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpression"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpression.Initializer"></a>

```typescript
import { sesMailManagerTrafficPolicy } from '@cdktn/provider-awscc'

const sesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpression: sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpression = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpression.property.evaluate">evaluate</a></code> | <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionEvaluate">SesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionEvaluate</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ses_mail_manager_traffic_policy#evaluate SesMailManagerTrafficPolicy#evaluate}. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpression.property.operator">operator</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ses_mail_manager_traffic_policy#operator SesMailManagerTrafficPolicy#operator}. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpression.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ses_mail_manager_traffic_policy#value SesMailManagerTrafficPolicy#value}. |

---

##### `evaluate`<sup>Optional</sup> <a name="evaluate" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpression.property.evaluate"></a>

```typescript
public readonly evaluate: SesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionEvaluate;
```

- *Type:* <a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionEvaluate">SesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionEvaluate</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ses_mail_manager_traffic_policy#evaluate SesMailManagerTrafficPolicy#evaluate}.

---

##### `operator`<sup>Optional</sup> <a name="operator" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpression.property.operator"></a>

```typescript
public readonly operator: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ses_mail_manager_traffic_policy#operator SesMailManagerTrafficPolicy#operator}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpression.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ses_mail_manager_traffic_policy#value SesMailManagerTrafficPolicy#value}.

---

### SesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionEvaluate <a name="SesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionEvaluate" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionEvaluate"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionEvaluate.Initializer"></a>

```typescript
import { sesMailManagerTrafficPolicy } from '@cdktn/provider-awscc'

const sesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionEvaluate: sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionEvaluate = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionEvaluate.property.attribute">attribute</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ses_mail_manager_traffic_policy#attribute SesMailManagerTrafficPolicy#attribute}. |

---

##### `attribute`<sup>Optional</sup> <a name="attribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionEvaluate.property.attribute"></a>

```typescript
public readonly attribute: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ses_mail_manager_traffic_policy#attribute SesMailManagerTrafficPolicy#attribute}.

---

### SesMailManagerTrafficPolicyTags <a name="SesMailManagerTrafficPolicyTags" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyTags.Initializer"></a>

```typescript
import { sesMailManagerTrafficPolicy } from '@cdktn/provider-awscc'

const sesMailManagerTrafficPolicyTags: sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyTags.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ses_mail_manager_traffic_policy#key SesMailManagerTrafficPolicy#key}. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyTags.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ses_mail_manager_traffic_policy#value SesMailManagerTrafficPolicy#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ses_mail_manager_traffic_policy#key SesMailManagerTrafficPolicy#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ses_mail_manager_traffic_policy#value SesMailManagerTrafficPolicy#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateAnalysisOutputReference <a name="SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateAnalysisOutputReference" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateAnalysisOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateAnalysisOutputReference.Initializer"></a>

```typescript
import { sesMailManagerTrafficPolicy } from '@cdktn/provider-awscc'

new sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateAnalysisOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateAnalysisOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateAnalysisOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateAnalysisOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateAnalysisOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateAnalysisOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateAnalysisOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateAnalysisOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateAnalysisOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateAnalysisOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateAnalysisOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateAnalysisOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateAnalysisOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateAnalysisOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateAnalysisOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateAnalysisOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateAnalysisOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateAnalysisOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateAnalysisOutputReference.resetAnalyzer">resetAnalyzer</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateAnalysisOutputReference.resetResultField">resetResultField</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateAnalysisOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateAnalysisOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateAnalysisOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateAnalysisOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateAnalysisOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateAnalysisOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateAnalysisOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateAnalysisOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateAnalysisOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateAnalysisOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateAnalysisOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateAnalysisOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateAnalysisOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateAnalysisOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateAnalysisOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateAnalysisOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateAnalysisOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateAnalysisOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateAnalysisOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateAnalysisOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateAnalysisOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateAnalysisOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateAnalysisOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateAnalysisOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAnalyzer` <a name="resetAnalyzer" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateAnalysisOutputReference.resetAnalyzer"></a>

```typescript
public resetAnalyzer(): void
```

##### `resetResultField` <a name="resetResultField" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateAnalysisOutputReference.resetResultField"></a>

```typescript
public resetResultField(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateAnalysisOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateAnalysisOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateAnalysisOutputReference.property.analyzerInput">analyzerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateAnalysisOutputReference.property.resultFieldInput">resultFieldInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateAnalysisOutputReference.property.analyzer">analyzer</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateAnalysisOutputReference.property.resultField">resultField</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateAnalysisOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateAnalysis">SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateAnalysis</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateAnalysisOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateAnalysisOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `analyzerInput`<sup>Optional</sup> <a name="analyzerInput" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateAnalysisOutputReference.property.analyzerInput"></a>

```typescript
public readonly analyzerInput: string;
```

- *Type:* string

---

##### `resultFieldInput`<sup>Optional</sup> <a name="resultFieldInput" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateAnalysisOutputReference.property.resultFieldInput"></a>

```typescript
public readonly resultFieldInput: string;
```

- *Type:* string

---

##### `analyzer`<sup>Required</sup> <a name="analyzer" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateAnalysisOutputReference.property.analyzer"></a>

```typescript
public readonly analyzer: string;
```

- *Type:* string

---

##### `resultField`<sup>Required</sup> <a name="resultField" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateAnalysisOutputReference.property.resultField"></a>

```typescript
public readonly resultField: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateAnalysisOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateAnalysis;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateAnalysis">SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateAnalysis</a>

---


### SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateIsInAddressListStructOutputReference <a name="SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateIsInAddressListStructOutputReference" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateIsInAddressListStructOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateIsInAddressListStructOutputReference.Initializer"></a>

```typescript
import { sesMailManagerTrafficPolicy } from '@cdktn/provider-awscc'

new sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateIsInAddressListStructOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateIsInAddressListStructOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateIsInAddressListStructOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateIsInAddressListStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateIsInAddressListStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateIsInAddressListStructOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateIsInAddressListStructOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateIsInAddressListStructOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateIsInAddressListStructOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateIsInAddressListStructOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateIsInAddressListStructOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateIsInAddressListStructOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateIsInAddressListStructOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateIsInAddressListStructOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateIsInAddressListStructOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateIsInAddressListStructOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateIsInAddressListStructOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateIsInAddressListStructOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateIsInAddressListStructOutputReference.resetAddressLists">resetAddressLists</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateIsInAddressListStructOutputReference.resetAttribute">resetAttribute</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateIsInAddressListStructOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateIsInAddressListStructOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateIsInAddressListStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateIsInAddressListStructOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateIsInAddressListStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateIsInAddressListStructOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateIsInAddressListStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateIsInAddressListStructOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateIsInAddressListStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateIsInAddressListStructOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateIsInAddressListStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateIsInAddressListStructOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateIsInAddressListStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateIsInAddressListStructOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateIsInAddressListStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateIsInAddressListStructOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateIsInAddressListStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateIsInAddressListStructOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateIsInAddressListStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateIsInAddressListStructOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateIsInAddressListStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateIsInAddressListStructOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateIsInAddressListStructOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateIsInAddressListStructOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAddressLists` <a name="resetAddressLists" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateIsInAddressListStructOutputReference.resetAddressLists"></a>

```typescript
public resetAddressLists(): void
```

##### `resetAttribute` <a name="resetAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateIsInAddressListStructOutputReference.resetAttribute"></a>

```typescript
public resetAttribute(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateIsInAddressListStructOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateIsInAddressListStructOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateIsInAddressListStructOutputReference.property.addressListsInput">addressListsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateIsInAddressListStructOutputReference.property.attributeInput">attributeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateIsInAddressListStructOutputReference.property.addressLists">addressLists</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateIsInAddressListStructOutputReference.property.attribute">attribute</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateIsInAddressListStructOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateIsInAddressListStruct">SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateIsInAddressListStruct</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateIsInAddressListStructOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateIsInAddressListStructOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `addressListsInput`<sup>Optional</sup> <a name="addressListsInput" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateIsInAddressListStructOutputReference.property.addressListsInput"></a>

```typescript
public readonly addressListsInput: string[];
```

- *Type:* string[]

---

##### `attributeInput`<sup>Optional</sup> <a name="attributeInput" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateIsInAddressListStructOutputReference.property.attributeInput"></a>

```typescript
public readonly attributeInput: string;
```

- *Type:* string

---

##### `addressLists`<sup>Required</sup> <a name="addressLists" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateIsInAddressListStructOutputReference.property.addressLists"></a>

```typescript
public readonly addressLists: string[];
```

- *Type:* string[]

---

##### `attribute`<sup>Required</sup> <a name="attribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateIsInAddressListStructOutputReference.property.attribute"></a>

```typescript
public readonly attribute: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateIsInAddressListStructOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateIsInAddressListStruct;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateIsInAddressListStruct">SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateIsInAddressListStruct</a>

---


### SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateOutputReference <a name="SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateOutputReference" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateOutputReference.Initializer"></a>

```typescript
import { sesMailManagerTrafficPolicy } from '@cdktn/provider-awscc'

new sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateOutputReference.putAnalysis">putAnalysis</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateOutputReference.putIsInAddressList">putIsInAddressList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateOutputReference.resetAnalysis">resetAnalysis</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateOutputReference.resetIsInAddressList">resetIsInAddressList</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAnalysis` <a name="putAnalysis" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateOutputReference.putAnalysis"></a>

```typescript
public putAnalysis(value: SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateAnalysis): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateOutputReference.putAnalysis.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateAnalysis">SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateAnalysis</a>

---

##### `putIsInAddressList` <a name="putIsInAddressList" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateOutputReference.putIsInAddressList"></a>

```typescript
public putIsInAddressList(value: SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateIsInAddressListStruct): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateOutputReference.putIsInAddressList.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateIsInAddressListStruct">SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateIsInAddressListStruct</a>

---

##### `resetAnalysis` <a name="resetAnalysis" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateOutputReference.resetAnalysis"></a>

```typescript
public resetAnalysis(): void
```

##### `resetIsInAddressList` <a name="resetIsInAddressList" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateOutputReference.resetIsInAddressList"></a>

```typescript
public resetIsInAddressList(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateOutputReference.property.analysis">analysis</a></code> | <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateAnalysisOutputReference">SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateAnalysisOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateOutputReference.property.isInAddressList">isInAddressList</a></code> | <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateIsInAddressListStructOutputReference">SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateIsInAddressListStructOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateOutputReference.property.analysisInput">analysisInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateAnalysis">SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateAnalysis</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateOutputReference.property.isInAddressListInput">isInAddressListInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateIsInAddressListStruct">SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateIsInAddressListStruct</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluate">SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluate</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `analysis`<sup>Required</sup> <a name="analysis" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateOutputReference.property.analysis"></a>

```typescript
public readonly analysis: SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateAnalysisOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateAnalysisOutputReference">SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateAnalysisOutputReference</a>

---

##### `isInAddressList`<sup>Required</sup> <a name="isInAddressList" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateOutputReference.property.isInAddressList"></a>

```typescript
public readonly isInAddressList: SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateIsInAddressListStructOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateIsInAddressListStructOutputReference">SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateIsInAddressListStructOutputReference</a>

---

##### `analysisInput`<sup>Optional</sup> <a name="analysisInput" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateOutputReference.property.analysisInput"></a>

```typescript
public readonly analysisInput: IResolvable | SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateAnalysis;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateAnalysis">SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateAnalysis</a>

---

##### `isInAddressListInput`<sup>Optional</sup> <a name="isInAddressListInput" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateOutputReference.property.isInAddressListInput"></a>

```typescript
public readonly isInAddressListInput: IResolvable | SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateIsInAddressListStruct;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateIsInAddressListStruct">SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateIsInAddressListStruct</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluate;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluate">SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluate</a>

---


### SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionOutputReference <a name="SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionOutputReference" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionOutputReference.Initializer"></a>

```typescript
import { sesMailManagerTrafficPolicy } from '@cdktn/provider-awscc'

new sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionOutputReference.putEvaluate">putEvaluate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionOutputReference.resetEvaluate">resetEvaluate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionOutputReference.resetOperator">resetOperator</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putEvaluate` <a name="putEvaluate" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionOutputReference.putEvaluate"></a>

```typescript
public putEvaluate(value: SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluate): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionOutputReference.putEvaluate.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluate">SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluate</a>

---

##### `resetEvaluate` <a name="resetEvaluate" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionOutputReference.resetEvaluate"></a>

```typescript
public resetEvaluate(): void
```

##### `resetOperator` <a name="resetOperator" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionOutputReference.resetOperator"></a>

```typescript
public resetOperator(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionOutputReference.property.evaluate">evaluate</a></code> | <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateOutputReference">SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionOutputReference.property.evaluateInput">evaluateInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluate">SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionOutputReference.property.operatorInput">operatorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionOutputReference.property.operator">operator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpression">SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpression</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `evaluate`<sup>Required</sup> <a name="evaluate" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionOutputReference.property.evaluate"></a>

```typescript
public readonly evaluate: SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateOutputReference">SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluateOutputReference</a>

---

##### `evaluateInput`<sup>Optional</sup> <a name="evaluateInput" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionOutputReference.property.evaluateInput"></a>

```typescript
public readonly evaluateInput: IResolvable | SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluate;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluate">SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionEvaluate</a>

---

##### `operatorInput`<sup>Optional</sup> <a name="operatorInput" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionOutputReference.property.operatorInput"></a>

```typescript
public readonly operatorInput: string;
```

- *Type:* string

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionOutputReference.property.operator"></a>

```typescript
public readonly operator: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpression;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpression">SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpression</a>

---


### SesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionEvaluateOutputReference <a name="SesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionEvaluateOutputReference" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionEvaluateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionEvaluateOutputReference.Initializer"></a>

```typescript
import { sesMailManagerTrafficPolicy } from '@cdktn/provider-awscc'

new sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionEvaluateOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionEvaluateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionEvaluateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionEvaluateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionEvaluateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionEvaluateOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionEvaluateOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionEvaluateOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionEvaluateOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionEvaluateOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionEvaluateOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionEvaluateOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionEvaluateOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionEvaluateOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionEvaluateOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionEvaluateOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionEvaluateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionEvaluateOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionEvaluateOutputReference.resetAttribute">resetAttribute</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionEvaluateOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionEvaluateOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionEvaluateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionEvaluateOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionEvaluateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionEvaluateOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionEvaluateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionEvaluateOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionEvaluateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionEvaluateOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionEvaluateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionEvaluateOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionEvaluateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionEvaluateOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionEvaluateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionEvaluateOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionEvaluateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionEvaluateOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionEvaluateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionEvaluateOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionEvaluateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionEvaluateOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionEvaluateOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionEvaluateOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAttribute` <a name="resetAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionEvaluateOutputReference.resetAttribute"></a>

```typescript
public resetAttribute(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionEvaluateOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionEvaluateOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionEvaluateOutputReference.property.attributeInput">attributeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionEvaluateOutputReference.property.attribute">attribute</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionEvaluateOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionEvaluate">SesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionEvaluate</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionEvaluateOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionEvaluateOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `attributeInput`<sup>Optional</sup> <a name="attributeInput" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionEvaluateOutputReference.property.attributeInput"></a>

```typescript
public readonly attributeInput: string;
```

- *Type:* string

---

##### `attribute`<sup>Required</sup> <a name="attribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionEvaluateOutputReference.property.attribute"></a>

```typescript
public readonly attribute: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionEvaluateOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionEvaluate;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionEvaluate">SesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionEvaluate</a>

---


### SesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionOutputReference <a name="SesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionOutputReference" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionOutputReference.Initializer"></a>

```typescript
import { sesMailManagerTrafficPolicy } from '@cdktn/provider-awscc'

new sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionOutputReference.putEvaluate">putEvaluate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionOutputReference.resetEvaluate">resetEvaluate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionOutputReference.resetOperator">resetOperator</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionOutputReference.resetValues">resetValues</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putEvaluate` <a name="putEvaluate" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionOutputReference.putEvaluate"></a>

```typescript
public putEvaluate(value: SesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionEvaluate): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionOutputReference.putEvaluate.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionEvaluate">SesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionEvaluate</a>

---

##### `resetEvaluate` <a name="resetEvaluate" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionOutputReference.resetEvaluate"></a>

```typescript
public resetEvaluate(): void
```

##### `resetOperator` <a name="resetOperator" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionOutputReference.resetOperator"></a>

```typescript
public resetOperator(): void
```

##### `resetValues` <a name="resetValues" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionOutputReference.resetValues"></a>

```typescript
public resetValues(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionOutputReference.property.evaluate">evaluate</a></code> | <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionEvaluateOutputReference">SesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionEvaluateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionOutputReference.property.evaluateInput">evaluateInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionEvaluate">SesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionEvaluate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionOutputReference.property.operatorInput">operatorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionOutputReference.property.operator">operator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpression">SesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpression</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `evaluate`<sup>Required</sup> <a name="evaluate" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionOutputReference.property.evaluate"></a>

```typescript
public readonly evaluate: SesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionEvaluateOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionEvaluateOutputReference">SesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionEvaluateOutputReference</a>

---

##### `evaluateInput`<sup>Optional</sup> <a name="evaluateInput" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionOutputReference.property.evaluateInput"></a>

```typescript
public readonly evaluateInput: IResolvable | SesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionEvaluate;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionEvaluate">SesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionEvaluate</a>

---

##### `operatorInput`<sup>Optional</sup> <a name="operatorInput" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionOutputReference.property.operatorInput"></a>

```typescript
public readonly operatorInput: string;
```

- *Type:* string

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionOutputReference.property.operator"></a>

```typescript
public readonly operator: string;
```

- *Type:* string

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpression;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpression">SesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpression</a>

---


### SesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionEvaluateOutputReference <a name="SesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionEvaluateOutputReference" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionEvaluateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionEvaluateOutputReference.Initializer"></a>

```typescript
import { sesMailManagerTrafficPolicy } from '@cdktn/provider-awscc'

new sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionEvaluateOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionEvaluateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionEvaluateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionEvaluateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionEvaluateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionEvaluateOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionEvaluateOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionEvaluateOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionEvaluateOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionEvaluateOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionEvaluateOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionEvaluateOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionEvaluateOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionEvaluateOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionEvaluateOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionEvaluateOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionEvaluateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionEvaluateOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionEvaluateOutputReference.resetAttribute">resetAttribute</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionEvaluateOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionEvaluateOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionEvaluateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionEvaluateOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionEvaluateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionEvaluateOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionEvaluateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionEvaluateOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionEvaluateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionEvaluateOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionEvaluateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionEvaluateOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionEvaluateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionEvaluateOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionEvaluateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionEvaluateOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionEvaluateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionEvaluateOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionEvaluateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionEvaluateOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionEvaluateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionEvaluateOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionEvaluateOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionEvaluateOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAttribute` <a name="resetAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionEvaluateOutputReference.resetAttribute"></a>

```typescript
public resetAttribute(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionEvaluateOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionEvaluateOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionEvaluateOutputReference.property.attributeInput">attributeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionEvaluateOutputReference.property.attribute">attribute</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionEvaluateOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionEvaluate">SesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionEvaluate</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionEvaluateOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionEvaluateOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `attributeInput`<sup>Optional</sup> <a name="attributeInput" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionEvaluateOutputReference.property.attributeInput"></a>

```typescript
public readonly attributeInput: string;
```

- *Type:* string

---

##### `attribute`<sup>Required</sup> <a name="attribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionEvaluateOutputReference.property.attribute"></a>

```typescript
public readonly attribute: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionEvaluateOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionEvaluate;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionEvaluate">SesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionEvaluate</a>

---


### SesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionOutputReference <a name="SesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionOutputReference" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionOutputReference.Initializer"></a>

```typescript
import { sesMailManagerTrafficPolicy } from '@cdktn/provider-awscc'

new sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionOutputReference.putEvaluate">putEvaluate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionOutputReference.resetEvaluate">resetEvaluate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionOutputReference.resetOperator">resetOperator</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionOutputReference.resetValues">resetValues</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putEvaluate` <a name="putEvaluate" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionOutputReference.putEvaluate"></a>

```typescript
public putEvaluate(value: SesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionEvaluate): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionOutputReference.putEvaluate.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionEvaluate">SesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionEvaluate</a>

---

##### `resetEvaluate` <a name="resetEvaluate" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionOutputReference.resetEvaluate"></a>

```typescript
public resetEvaluate(): void
```

##### `resetOperator` <a name="resetOperator" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionOutputReference.resetOperator"></a>

```typescript
public resetOperator(): void
```

##### `resetValues` <a name="resetValues" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionOutputReference.resetValues"></a>

```typescript
public resetValues(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionOutputReference.property.evaluate">evaluate</a></code> | <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionEvaluateOutputReference">SesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionEvaluateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionOutputReference.property.evaluateInput">evaluateInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionEvaluate">SesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionEvaluate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionOutputReference.property.operatorInput">operatorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionOutputReference.property.operator">operator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6Expression">SesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6Expression</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `evaluate`<sup>Required</sup> <a name="evaluate" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionOutputReference.property.evaluate"></a>

```typescript
public readonly evaluate: SesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionEvaluateOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionEvaluateOutputReference">SesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionEvaluateOutputReference</a>

---

##### `evaluateInput`<sup>Optional</sup> <a name="evaluateInput" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionOutputReference.property.evaluateInput"></a>

```typescript
public readonly evaluateInput: IResolvable | SesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionEvaluate;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionEvaluate">SesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionEvaluate</a>

---

##### `operatorInput`<sup>Optional</sup> <a name="operatorInput" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionOutputReference.property.operatorInput"></a>

```typescript
public readonly operatorInput: string;
```

- *Type:* string

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionOutputReference.property.operator"></a>

```typescript
public readonly operator: string;
```

- *Type:* string

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6Expression;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6Expression">SesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6Expression</a>

---


### SesMailManagerTrafficPolicyPolicyStatementsConditionsList <a name="SesMailManagerTrafficPolicyPolicyStatementsConditionsList" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsList.Initializer"></a>

```typescript
import { sesMailManagerTrafficPolicy } from '@cdktn/provider-awscc'

new sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsList.get"></a>

```typescript
public get(index: number): SesMailManagerTrafficPolicyPolicyStatementsConditionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditions">SesMailManagerTrafficPolicyPolicyStatementsConditions</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SesMailManagerTrafficPolicyPolicyStatementsConditions[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditions">SesMailManagerTrafficPolicyPolicyStatementsConditions</a>[]

---


### SesMailManagerTrafficPolicyPolicyStatementsConditionsOutputReference <a name="SesMailManagerTrafficPolicyPolicyStatementsConditionsOutputReference" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsOutputReference.Initializer"></a>

```typescript
import { sesMailManagerTrafficPolicy } from '@cdktn/provider-awscc'

new sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsOutputReference.putBooleanExpression">putBooleanExpression</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsOutputReference.putIpExpression">putIpExpression</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsOutputReference.putIpv6Expression">putIpv6Expression</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsOutputReference.putStringExpression">putStringExpression</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsOutputReference.putTlsExpression">putTlsExpression</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsOutputReference.resetBooleanExpression">resetBooleanExpression</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsOutputReference.resetIpExpression">resetIpExpression</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsOutputReference.resetIpv6Expression">resetIpv6Expression</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsOutputReference.resetStringExpression">resetStringExpression</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsOutputReference.resetTlsExpression">resetTlsExpression</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putBooleanExpression` <a name="putBooleanExpression" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsOutputReference.putBooleanExpression"></a>

```typescript
public putBooleanExpression(value: SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpression): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsOutputReference.putBooleanExpression.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpression">SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpression</a>

---

##### `putIpExpression` <a name="putIpExpression" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsOutputReference.putIpExpression"></a>

```typescript
public putIpExpression(value: SesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpression): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsOutputReference.putIpExpression.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpression">SesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpression</a>

---

##### `putIpv6Expression` <a name="putIpv6Expression" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsOutputReference.putIpv6Expression"></a>

```typescript
public putIpv6Expression(value: SesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6Expression): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsOutputReference.putIpv6Expression.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6Expression">SesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6Expression</a>

---

##### `putStringExpression` <a name="putStringExpression" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsOutputReference.putStringExpression"></a>

```typescript
public putStringExpression(value: SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpression): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsOutputReference.putStringExpression.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpression">SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpression</a>

---

##### `putTlsExpression` <a name="putTlsExpression" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsOutputReference.putTlsExpression"></a>

```typescript
public putTlsExpression(value: SesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpression): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsOutputReference.putTlsExpression.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpression">SesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpression</a>

---

##### `resetBooleanExpression` <a name="resetBooleanExpression" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsOutputReference.resetBooleanExpression"></a>

```typescript
public resetBooleanExpression(): void
```

##### `resetIpExpression` <a name="resetIpExpression" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsOutputReference.resetIpExpression"></a>

```typescript
public resetIpExpression(): void
```

##### `resetIpv6Expression` <a name="resetIpv6Expression" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsOutputReference.resetIpv6Expression"></a>

```typescript
public resetIpv6Expression(): void
```

##### `resetStringExpression` <a name="resetStringExpression" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsOutputReference.resetStringExpression"></a>

```typescript
public resetStringExpression(): void
```

##### `resetTlsExpression` <a name="resetTlsExpression" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsOutputReference.resetTlsExpression"></a>

```typescript
public resetTlsExpression(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsOutputReference.property.booleanExpression">booleanExpression</a></code> | <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionOutputReference">SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsOutputReference.property.ipExpression">ipExpression</a></code> | <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionOutputReference">SesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsOutputReference.property.ipv6Expression">ipv6Expression</a></code> | <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionOutputReference">SesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsOutputReference.property.stringExpression">stringExpression</a></code> | <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionOutputReference">SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsOutputReference.property.tlsExpression">tlsExpression</a></code> | <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionOutputReference">SesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsOutputReference.property.booleanExpressionInput">booleanExpressionInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpression">SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpression</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsOutputReference.property.ipExpressionInput">ipExpressionInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpression">SesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpression</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsOutputReference.property.ipv6ExpressionInput">ipv6ExpressionInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6Expression">SesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6Expression</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsOutputReference.property.stringExpressionInput">stringExpressionInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpression">SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpression</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsOutputReference.property.tlsExpressionInput">tlsExpressionInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpression">SesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpression</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditions">SesMailManagerTrafficPolicyPolicyStatementsConditions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `booleanExpression`<sup>Required</sup> <a name="booleanExpression" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsOutputReference.property.booleanExpression"></a>

```typescript
public readonly booleanExpression: SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionOutputReference">SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpressionOutputReference</a>

---

##### `ipExpression`<sup>Required</sup> <a name="ipExpression" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsOutputReference.property.ipExpression"></a>

```typescript
public readonly ipExpression: SesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionOutputReference">SesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpressionOutputReference</a>

---

##### `ipv6Expression`<sup>Required</sup> <a name="ipv6Expression" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsOutputReference.property.ipv6Expression"></a>

```typescript
public readonly ipv6Expression: SesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionOutputReference">SesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6ExpressionOutputReference</a>

---

##### `stringExpression`<sup>Required</sup> <a name="stringExpression" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsOutputReference.property.stringExpression"></a>

```typescript
public readonly stringExpression: SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionOutputReference">SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionOutputReference</a>

---

##### `tlsExpression`<sup>Required</sup> <a name="tlsExpression" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsOutputReference.property.tlsExpression"></a>

```typescript
public readonly tlsExpression: SesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionOutputReference">SesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionOutputReference</a>

---

##### `booleanExpressionInput`<sup>Optional</sup> <a name="booleanExpressionInput" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsOutputReference.property.booleanExpressionInput"></a>

```typescript
public readonly booleanExpressionInput: IResolvable | SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpression;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpression">SesMailManagerTrafficPolicyPolicyStatementsConditionsBooleanExpression</a>

---

##### `ipExpressionInput`<sup>Optional</sup> <a name="ipExpressionInput" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsOutputReference.property.ipExpressionInput"></a>

```typescript
public readonly ipExpressionInput: IResolvable | SesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpression;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpression">SesMailManagerTrafficPolicyPolicyStatementsConditionsIpExpression</a>

---

##### `ipv6ExpressionInput`<sup>Optional</sup> <a name="ipv6ExpressionInput" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsOutputReference.property.ipv6ExpressionInput"></a>

```typescript
public readonly ipv6ExpressionInput: IResolvable | SesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6Expression;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6Expression">SesMailManagerTrafficPolicyPolicyStatementsConditionsIpv6Expression</a>

---

##### `stringExpressionInput`<sup>Optional</sup> <a name="stringExpressionInput" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsOutputReference.property.stringExpressionInput"></a>

```typescript
public readonly stringExpressionInput: IResolvable | SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpression;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpression">SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpression</a>

---

##### `tlsExpressionInput`<sup>Optional</sup> <a name="tlsExpressionInput" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsOutputReference.property.tlsExpressionInput"></a>

```typescript
public readonly tlsExpressionInput: IResolvable | SesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpression;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpression">SesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpression</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SesMailManagerTrafficPolicyPolicyStatementsConditions;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditions">SesMailManagerTrafficPolicyPolicyStatementsConditions</a>

---


### SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateAnalysisOutputReference <a name="SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateAnalysisOutputReference" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateAnalysisOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateAnalysisOutputReference.Initializer"></a>

```typescript
import { sesMailManagerTrafficPolicy } from '@cdktn/provider-awscc'

new sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateAnalysisOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateAnalysisOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateAnalysisOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateAnalysisOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateAnalysisOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateAnalysisOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateAnalysisOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateAnalysisOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateAnalysisOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateAnalysisOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateAnalysisOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateAnalysisOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateAnalysisOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateAnalysisOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateAnalysisOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateAnalysisOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateAnalysisOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateAnalysisOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateAnalysisOutputReference.resetAnalyzer">resetAnalyzer</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateAnalysisOutputReference.resetResultField">resetResultField</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateAnalysisOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateAnalysisOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateAnalysisOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateAnalysisOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateAnalysisOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateAnalysisOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateAnalysisOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateAnalysisOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateAnalysisOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateAnalysisOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateAnalysisOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateAnalysisOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateAnalysisOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateAnalysisOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateAnalysisOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateAnalysisOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateAnalysisOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateAnalysisOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateAnalysisOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateAnalysisOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateAnalysisOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateAnalysisOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateAnalysisOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateAnalysisOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAnalyzer` <a name="resetAnalyzer" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateAnalysisOutputReference.resetAnalyzer"></a>

```typescript
public resetAnalyzer(): void
```

##### `resetResultField` <a name="resetResultField" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateAnalysisOutputReference.resetResultField"></a>

```typescript
public resetResultField(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateAnalysisOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateAnalysisOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateAnalysisOutputReference.property.analyzerInput">analyzerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateAnalysisOutputReference.property.resultFieldInput">resultFieldInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateAnalysisOutputReference.property.analyzer">analyzer</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateAnalysisOutputReference.property.resultField">resultField</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateAnalysisOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateAnalysis">SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateAnalysis</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateAnalysisOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateAnalysisOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `analyzerInput`<sup>Optional</sup> <a name="analyzerInput" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateAnalysisOutputReference.property.analyzerInput"></a>

```typescript
public readonly analyzerInput: string;
```

- *Type:* string

---

##### `resultFieldInput`<sup>Optional</sup> <a name="resultFieldInput" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateAnalysisOutputReference.property.resultFieldInput"></a>

```typescript
public readonly resultFieldInput: string;
```

- *Type:* string

---

##### `analyzer`<sup>Required</sup> <a name="analyzer" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateAnalysisOutputReference.property.analyzer"></a>

```typescript
public readonly analyzer: string;
```

- *Type:* string

---

##### `resultField`<sup>Required</sup> <a name="resultField" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateAnalysisOutputReference.property.resultField"></a>

```typescript
public readonly resultField: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateAnalysisOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateAnalysis;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateAnalysis">SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateAnalysis</a>

---


### SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateOutputReference <a name="SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateOutputReference" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateOutputReference.Initializer"></a>

```typescript
import { sesMailManagerTrafficPolicy } from '@cdktn/provider-awscc'

new sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateOutputReference.putAnalysis">putAnalysis</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateOutputReference.resetAnalysis">resetAnalysis</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateOutputReference.resetAttribute">resetAttribute</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAnalysis` <a name="putAnalysis" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateOutputReference.putAnalysis"></a>

```typescript
public putAnalysis(value: SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateAnalysis): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateOutputReference.putAnalysis.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateAnalysis">SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateAnalysis</a>

---

##### `resetAnalysis` <a name="resetAnalysis" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateOutputReference.resetAnalysis"></a>

```typescript
public resetAnalysis(): void
```

##### `resetAttribute` <a name="resetAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateOutputReference.resetAttribute"></a>

```typescript
public resetAttribute(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateOutputReference.property.analysis">analysis</a></code> | <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateAnalysisOutputReference">SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateAnalysisOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateOutputReference.property.analysisInput">analysisInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateAnalysis">SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateAnalysis</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateOutputReference.property.attributeInput">attributeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateOutputReference.property.attribute">attribute</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluate">SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluate</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `analysis`<sup>Required</sup> <a name="analysis" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateOutputReference.property.analysis"></a>

```typescript
public readonly analysis: SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateAnalysisOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateAnalysisOutputReference">SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateAnalysisOutputReference</a>

---

##### `analysisInput`<sup>Optional</sup> <a name="analysisInput" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateOutputReference.property.analysisInput"></a>

```typescript
public readonly analysisInput: IResolvable | SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateAnalysis;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateAnalysis">SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateAnalysis</a>

---

##### `attributeInput`<sup>Optional</sup> <a name="attributeInput" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateOutputReference.property.attributeInput"></a>

```typescript
public readonly attributeInput: string;
```

- *Type:* string

---

##### `attribute`<sup>Required</sup> <a name="attribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateOutputReference.property.attribute"></a>

```typescript
public readonly attribute: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluate;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluate">SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluate</a>

---


### SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionOutputReference <a name="SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionOutputReference" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionOutputReference.Initializer"></a>

```typescript
import { sesMailManagerTrafficPolicy } from '@cdktn/provider-awscc'

new sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionOutputReference.putEvaluate">putEvaluate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionOutputReference.resetEvaluate">resetEvaluate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionOutputReference.resetOperator">resetOperator</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionOutputReference.resetValues">resetValues</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putEvaluate` <a name="putEvaluate" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionOutputReference.putEvaluate"></a>

```typescript
public putEvaluate(value: SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluate): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionOutputReference.putEvaluate.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluate">SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluate</a>

---

##### `resetEvaluate` <a name="resetEvaluate" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionOutputReference.resetEvaluate"></a>

```typescript
public resetEvaluate(): void
```

##### `resetOperator` <a name="resetOperator" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionOutputReference.resetOperator"></a>

```typescript
public resetOperator(): void
```

##### `resetValues` <a name="resetValues" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionOutputReference.resetValues"></a>

```typescript
public resetValues(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionOutputReference.property.evaluate">evaluate</a></code> | <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateOutputReference">SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionOutputReference.property.evaluateInput">evaluateInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluate">SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionOutputReference.property.operatorInput">operatorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionOutputReference.property.operator">operator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpression">SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpression</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `evaluate`<sup>Required</sup> <a name="evaluate" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionOutputReference.property.evaluate"></a>

```typescript
public readonly evaluate: SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateOutputReference">SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluateOutputReference</a>

---

##### `evaluateInput`<sup>Optional</sup> <a name="evaluateInput" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionOutputReference.property.evaluateInput"></a>

```typescript
public readonly evaluateInput: IResolvable | SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluate;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluate">SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionEvaluate</a>

---

##### `operatorInput`<sup>Optional</sup> <a name="operatorInput" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionOutputReference.property.operatorInput"></a>

```typescript
public readonly operatorInput: string;
```

- *Type:* string

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionOutputReference.property.operator"></a>

```typescript
public readonly operator: string;
```

- *Type:* string

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpressionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpression;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpression">SesMailManagerTrafficPolicyPolicyStatementsConditionsStringExpression</a>

---


### SesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionEvaluateOutputReference <a name="SesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionEvaluateOutputReference" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionEvaluateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionEvaluateOutputReference.Initializer"></a>

```typescript
import { sesMailManagerTrafficPolicy } from '@cdktn/provider-awscc'

new sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionEvaluateOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionEvaluateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionEvaluateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionEvaluateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionEvaluateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionEvaluateOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionEvaluateOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionEvaluateOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionEvaluateOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionEvaluateOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionEvaluateOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionEvaluateOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionEvaluateOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionEvaluateOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionEvaluateOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionEvaluateOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionEvaluateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionEvaluateOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionEvaluateOutputReference.resetAttribute">resetAttribute</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionEvaluateOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionEvaluateOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionEvaluateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionEvaluateOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionEvaluateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionEvaluateOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionEvaluateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionEvaluateOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionEvaluateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionEvaluateOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionEvaluateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionEvaluateOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionEvaluateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionEvaluateOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionEvaluateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionEvaluateOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionEvaluateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionEvaluateOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionEvaluateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionEvaluateOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionEvaluateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionEvaluateOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionEvaluateOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionEvaluateOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAttribute` <a name="resetAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionEvaluateOutputReference.resetAttribute"></a>

```typescript
public resetAttribute(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionEvaluateOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionEvaluateOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionEvaluateOutputReference.property.attributeInput">attributeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionEvaluateOutputReference.property.attribute">attribute</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionEvaluateOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionEvaluate">SesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionEvaluate</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionEvaluateOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionEvaluateOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `attributeInput`<sup>Optional</sup> <a name="attributeInput" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionEvaluateOutputReference.property.attributeInput"></a>

```typescript
public readonly attributeInput: string;
```

- *Type:* string

---

##### `attribute`<sup>Required</sup> <a name="attribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionEvaluateOutputReference.property.attribute"></a>

```typescript
public readonly attribute: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionEvaluateOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionEvaluate;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionEvaluate">SesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionEvaluate</a>

---


### SesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionOutputReference <a name="SesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionOutputReference" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionOutputReference.Initializer"></a>

```typescript
import { sesMailManagerTrafficPolicy } from '@cdktn/provider-awscc'

new sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionOutputReference.putEvaluate">putEvaluate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionOutputReference.resetEvaluate">resetEvaluate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionOutputReference.resetOperator">resetOperator</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putEvaluate` <a name="putEvaluate" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionOutputReference.putEvaluate"></a>

```typescript
public putEvaluate(value: SesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionEvaluate): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionOutputReference.putEvaluate.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionEvaluate">SesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionEvaluate</a>

---

##### `resetEvaluate` <a name="resetEvaluate" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionOutputReference.resetEvaluate"></a>

```typescript
public resetEvaluate(): void
```

##### `resetOperator` <a name="resetOperator" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionOutputReference.resetOperator"></a>

```typescript
public resetOperator(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionOutputReference.property.evaluate">evaluate</a></code> | <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionEvaluateOutputReference">SesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionEvaluateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionOutputReference.property.evaluateInput">evaluateInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionEvaluate">SesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionEvaluate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionOutputReference.property.operatorInput">operatorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionOutputReference.property.operator">operator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpression">SesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpression</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `evaluate`<sup>Required</sup> <a name="evaluate" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionOutputReference.property.evaluate"></a>

```typescript
public readonly evaluate: SesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionEvaluateOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionEvaluateOutputReference">SesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionEvaluateOutputReference</a>

---

##### `evaluateInput`<sup>Optional</sup> <a name="evaluateInput" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionOutputReference.property.evaluateInput"></a>

```typescript
public readonly evaluateInput: IResolvable | SesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionEvaluate;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionEvaluate">SesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionEvaluate</a>

---

##### `operatorInput`<sup>Optional</sup> <a name="operatorInput" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionOutputReference.property.operatorInput"></a>

```typescript
public readonly operatorInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionOutputReference.property.operator"></a>

```typescript
public readonly operator: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpressionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpression;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpression">SesMailManagerTrafficPolicyPolicyStatementsConditionsTlsExpression</a>

---


### SesMailManagerTrafficPolicyPolicyStatementsList <a name="SesMailManagerTrafficPolicyPolicyStatementsList" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsList.Initializer"></a>

```typescript
import { sesMailManagerTrafficPolicy } from '@cdktn/provider-awscc'

new sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsList.get"></a>

```typescript
public get(index: number): SesMailManagerTrafficPolicyPolicyStatementsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatements">SesMailManagerTrafficPolicyPolicyStatements</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SesMailManagerTrafficPolicyPolicyStatements[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatements">SesMailManagerTrafficPolicyPolicyStatements</a>[]

---


### SesMailManagerTrafficPolicyPolicyStatementsOutputReference <a name="SesMailManagerTrafficPolicyPolicyStatementsOutputReference" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsOutputReference.Initializer"></a>

```typescript
import { sesMailManagerTrafficPolicy } from '@cdktn/provider-awscc'

new sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsOutputReference.putConditions">putConditions</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putConditions` <a name="putConditions" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsOutputReference.putConditions"></a>

```typescript
public putConditions(value: IResolvable | SesMailManagerTrafficPolicyPolicyStatementsConditions[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsOutputReference.putConditions.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditions">SesMailManagerTrafficPolicyPolicyStatementsConditions</a>[]

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsOutputReference.property.conditions">conditions</a></code> | <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsList">SesMailManagerTrafficPolicyPolicyStatementsConditionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsOutputReference.property.actionInput">actionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsOutputReference.property.conditionsInput">conditionsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditions">SesMailManagerTrafficPolicyPolicyStatementsConditions</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsOutputReference.property.action">action</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatements">SesMailManagerTrafficPolicyPolicyStatements</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `conditions`<sup>Required</sup> <a name="conditions" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsOutputReference.property.conditions"></a>

```typescript
public readonly conditions: SesMailManagerTrafficPolicyPolicyStatementsConditionsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditionsList">SesMailManagerTrafficPolicyPolicyStatementsConditionsList</a>

---

##### `actionInput`<sup>Optional</sup> <a name="actionInput" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsOutputReference.property.actionInput"></a>

```typescript
public readonly actionInput: string;
```

- *Type:* string

---

##### `conditionsInput`<sup>Optional</sup> <a name="conditionsInput" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsOutputReference.property.conditionsInput"></a>

```typescript
public readonly conditionsInput: IResolvable | SesMailManagerTrafficPolicyPolicyStatementsConditions[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsConditions">SesMailManagerTrafficPolicyPolicyStatementsConditions</a>[]

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsOutputReference.property.action"></a>

```typescript
public readonly action: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatementsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SesMailManagerTrafficPolicyPolicyStatements;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyPolicyStatements">SesMailManagerTrafficPolicyPolicyStatements</a>

---


### SesMailManagerTrafficPolicyTagsList <a name="SesMailManagerTrafficPolicyTagsList" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyTagsList.Initializer"></a>

```typescript
import { sesMailManagerTrafficPolicy } from '@cdktn/provider-awscc'

new sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyTagsList.get"></a>

```typescript
public get(index: number): SesMailManagerTrafficPolicyTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyTags">SesMailManagerTrafficPolicyTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SesMailManagerTrafficPolicyTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyTags">SesMailManagerTrafficPolicyTags</a>[]

---


### SesMailManagerTrafficPolicyTagsOutputReference <a name="SesMailManagerTrafficPolicyTagsOutputReference" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyTagsOutputReference.Initializer"></a>

```typescript
import { sesMailManagerTrafficPolicy } from '@cdktn/provider-awscc'

new sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyTags">SesMailManagerTrafficPolicyTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SesMailManagerTrafficPolicyTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sesMailManagerTrafficPolicy.SesMailManagerTrafficPolicyTags">SesMailManagerTrafficPolicyTags</a>

---




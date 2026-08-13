# `sesMailManagerIngressPoint` Submodule <a name="`sesMailManagerIngressPoint` Submodule" id="@cdktn/provider-awscc.sesMailManagerIngressPoint"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SesMailManagerIngressPoint <a name="SesMailManagerIngressPoint" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ses_mail_manager_ingress_point awscc_ses_mail_manager_ingress_point}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.Initializer"></a>

```typescript
import { sesMailManagerIngressPoint } from '@cdktn/provider-awscc'

new sesMailManagerIngressPoint.SesMailManagerIngressPoint(scope: Construct, id: string, config: SesMailManagerIngressPointConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointConfig">SesMailManagerIngressPointConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointConfig">SesMailManagerIngressPointConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.putIngressPointConfiguration">putIngressPointConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.putNetworkConfiguration">putNetworkConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.resetIngressPointConfiguration">resetIngressPointConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.resetIngressPointName">resetIngressPointName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.resetNetworkConfiguration">resetNetworkConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.resetStatusToUpdate">resetStatusToUpdate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.resetTlsPolicy">resetTlsPolicy</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putIngressPointConfiguration` <a name="putIngressPointConfiguration" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.putIngressPointConfiguration"></a>

```typescript
public putIngressPointConfiguration(value: SesMailManagerIngressPointIngressPointConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.putIngressPointConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfiguration">SesMailManagerIngressPointIngressPointConfiguration</a>

---

##### `putNetworkConfiguration` <a name="putNetworkConfiguration" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.putNetworkConfiguration"></a>

```typescript
public putNetworkConfiguration(value: SesMailManagerIngressPointNetworkConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.putNetworkConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfiguration">SesMailManagerIngressPointNetworkConfiguration</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.putTags"></a>

```typescript
public putTags(value: IResolvable | SesMailManagerIngressPointTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointTags">SesMailManagerIngressPointTags</a>[]

---

##### `resetIngressPointConfiguration` <a name="resetIngressPointConfiguration" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.resetIngressPointConfiguration"></a>

```typescript
public resetIngressPointConfiguration(): void
```

##### `resetIngressPointName` <a name="resetIngressPointName" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.resetIngressPointName"></a>

```typescript
public resetIngressPointName(): void
```

##### `resetNetworkConfiguration` <a name="resetNetworkConfiguration" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.resetNetworkConfiguration"></a>

```typescript
public resetNetworkConfiguration(): void
```

##### `resetStatusToUpdate` <a name="resetStatusToUpdate" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.resetStatusToUpdate"></a>

```typescript
public resetStatusToUpdate(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTlsPolicy` <a name="resetTlsPolicy" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.resetTlsPolicy"></a>

```typescript
public resetTlsPolicy(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a SesMailManagerIngressPoint resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.isConstruct"></a>

```typescript
import { sesMailManagerIngressPoint } from '@cdktn/provider-awscc'

sesMailManagerIngressPoint.SesMailManagerIngressPoint.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.isTerraformElement"></a>

```typescript
import { sesMailManagerIngressPoint } from '@cdktn/provider-awscc'

sesMailManagerIngressPoint.SesMailManagerIngressPoint.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.isTerraformResource"></a>

```typescript
import { sesMailManagerIngressPoint } from '@cdktn/provider-awscc'

sesMailManagerIngressPoint.SesMailManagerIngressPoint.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.generateConfigForImport"></a>

```typescript
import { sesMailManagerIngressPoint } from '@cdktn/provider-awscc'

sesMailManagerIngressPoint.SesMailManagerIngressPoint.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a SesMailManagerIngressPoint resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the SesMailManagerIngressPoint to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing SesMailManagerIngressPoint that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ses_mail_manager_ingress_point#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the SesMailManagerIngressPoint to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.property.aRecord">aRecord</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.property.ingressPointArn">ingressPointArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.property.ingressPointConfiguration">ingressPointConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationOutputReference">SesMailManagerIngressPointIngressPointConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.property.ingressPointId">ingressPointId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.property.networkConfiguration">networkConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationOutputReference">SesMailManagerIngressPointNetworkConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointTagsList">SesMailManagerIngressPointTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.property.ingressPointConfigurationInput">ingressPointConfigurationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfiguration">SesMailManagerIngressPointIngressPointConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.property.ingressPointNameInput">ingressPointNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.property.networkConfigurationInput">networkConfigurationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfiguration">SesMailManagerIngressPointNetworkConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.property.ruleSetIdInput">ruleSetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.property.statusToUpdateInput">statusToUpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointTags">SesMailManagerIngressPointTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.property.tlsPolicyInput">tlsPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.property.trafficPolicyIdInput">trafficPolicyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.property.ingressPointName">ingressPointName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.property.ruleSetId">ruleSetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.property.statusToUpdate">statusToUpdate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.property.tlsPolicy">tlsPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.property.trafficPolicyId">trafficPolicyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.property.type">type</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `aRecord`<sup>Required</sup> <a name="aRecord" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.property.aRecord"></a>

```typescript
public readonly aRecord: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `ingressPointArn`<sup>Required</sup> <a name="ingressPointArn" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.property.ingressPointArn"></a>

```typescript
public readonly ingressPointArn: string;
```

- *Type:* string

---

##### `ingressPointConfiguration`<sup>Required</sup> <a name="ingressPointConfiguration" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.property.ingressPointConfiguration"></a>

```typescript
public readonly ingressPointConfiguration: SesMailManagerIngressPointIngressPointConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationOutputReference">SesMailManagerIngressPointIngressPointConfigurationOutputReference</a>

---

##### `ingressPointId`<sup>Required</sup> <a name="ingressPointId" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.property.ingressPointId"></a>

```typescript
public readonly ingressPointId: string;
```

- *Type:* string

---

##### `networkConfiguration`<sup>Required</sup> <a name="networkConfiguration" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.property.networkConfiguration"></a>

```typescript
public readonly networkConfiguration: SesMailManagerIngressPointNetworkConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationOutputReference">SesMailManagerIngressPointNetworkConfigurationOutputReference</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.property.tags"></a>

```typescript
public readonly tags: SesMailManagerIngressPointTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointTagsList">SesMailManagerIngressPointTagsList</a>

---

##### `ingressPointConfigurationInput`<sup>Optional</sup> <a name="ingressPointConfigurationInput" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.property.ingressPointConfigurationInput"></a>

```typescript
public readonly ingressPointConfigurationInput: IResolvable | SesMailManagerIngressPointIngressPointConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfiguration">SesMailManagerIngressPointIngressPointConfiguration</a>

---

##### `ingressPointNameInput`<sup>Optional</sup> <a name="ingressPointNameInput" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.property.ingressPointNameInput"></a>

```typescript
public readonly ingressPointNameInput: string;
```

- *Type:* string

---

##### `networkConfigurationInput`<sup>Optional</sup> <a name="networkConfigurationInput" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.property.networkConfigurationInput"></a>

```typescript
public readonly networkConfigurationInput: IResolvable | SesMailManagerIngressPointNetworkConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfiguration">SesMailManagerIngressPointNetworkConfiguration</a>

---

##### `ruleSetIdInput`<sup>Optional</sup> <a name="ruleSetIdInput" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.property.ruleSetIdInput"></a>

```typescript
public readonly ruleSetIdInput: string;
```

- *Type:* string

---

##### `statusToUpdateInput`<sup>Optional</sup> <a name="statusToUpdateInput" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.property.statusToUpdateInput"></a>

```typescript
public readonly statusToUpdateInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | SesMailManagerIngressPointTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointTags">SesMailManagerIngressPointTags</a>[]

---

##### `tlsPolicyInput`<sup>Optional</sup> <a name="tlsPolicyInput" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.property.tlsPolicyInput"></a>

```typescript
public readonly tlsPolicyInput: string;
```

- *Type:* string

---

##### `trafficPolicyIdInput`<sup>Optional</sup> <a name="trafficPolicyIdInput" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.property.trafficPolicyIdInput"></a>

```typescript
public readonly trafficPolicyIdInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `ingressPointName`<sup>Required</sup> <a name="ingressPointName" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.property.ingressPointName"></a>

```typescript
public readonly ingressPointName: string;
```

- *Type:* string

---

##### `ruleSetId`<sup>Required</sup> <a name="ruleSetId" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.property.ruleSetId"></a>

```typescript
public readonly ruleSetId: string;
```

- *Type:* string

---

##### `statusToUpdate`<sup>Required</sup> <a name="statusToUpdate" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.property.statusToUpdate"></a>

```typescript
public readonly statusToUpdate: string;
```

- *Type:* string

---

##### `tlsPolicy`<sup>Required</sup> <a name="tlsPolicy" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.property.tlsPolicy"></a>

```typescript
public readonly tlsPolicy: string;
```

- *Type:* string

---

##### `trafficPolicyId`<sup>Required</sup> <a name="trafficPolicyId" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.property.trafficPolicyId"></a>

```typescript
public readonly trafficPolicyId: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPoint.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SesMailManagerIngressPointConfig <a name="SesMailManagerIngressPointConfig" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointConfig.Initializer"></a>

```typescript
import { sesMailManagerIngressPoint } from '@cdktn/provider-awscc'

const sesMailManagerIngressPointConfig: sesMailManagerIngressPoint.SesMailManagerIngressPointConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointConfig.property.ruleSetId">ruleSetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ses_mail_manager_ingress_point#rule_set_id SesMailManagerIngressPoint#rule_set_id}. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointConfig.property.trafficPolicyId">trafficPolicyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ses_mail_manager_ingress_point#traffic_policy_id SesMailManagerIngressPoint#traffic_policy_id}. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointConfig.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ses_mail_manager_ingress_point#type SesMailManagerIngressPoint#type}. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointConfig.property.ingressPointConfiguration">ingressPointConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfiguration">SesMailManagerIngressPointIngressPointConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ses_mail_manager_ingress_point#ingress_point_configuration SesMailManagerIngressPoint#ingress_point_configuration}. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointConfig.property.ingressPointName">ingressPointName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ses_mail_manager_ingress_point#ingress_point_name SesMailManagerIngressPoint#ingress_point_name}. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointConfig.property.networkConfiguration">networkConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfiguration">SesMailManagerIngressPointNetworkConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ses_mail_manager_ingress_point#network_configuration SesMailManagerIngressPoint#network_configuration}. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointConfig.property.statusToUpdate">statusToUpdate</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ses_mail_manager_ingress_point#status_to_update SesMailManagerIngressPoint#status_to_update}. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointTags">SesMailManagerIngressPointTags</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ses_mail_manager_ingress_point#tags SesMailManagerIngressPoint#tags}. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointConfig.property.tlsPolicy">tlsPolicy</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ses_mail_manager_ingress_point#tls_policy SesMailManagerIngressPoint#tls_policy}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `ruleSetId`<sup>Required</sup> <a name="ruleSetId" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointConfig.property.ruleSetId"></a>

```typescript
public readonly ruleSetId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ses_mail_manager_ingress_point#rule_set_id SesMailManagerIngressPoint#rule_set_id}.

---

##### `trafficPolicyId`<sup>Required</sup> <a name="trafficPolicyId" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointConfig.property.trafficPolicyId"></a>

```typescript
public readonly trafficPolicyId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ses_mail_manager_ingress_point#traffic_policy_id SesMailManagerIngressPoint#traffic_policy_id}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointConfig.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ses_mail_manager_ingress_point#type SesMailManagerIngressPoint#type}.

---

##### `ingressPointConfiguration`<sup>Optional</sup> <a name="ingressPointConfiguration" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointConfig.property.ingressPointConfiguration"></a>

```typescript
public readonly ingressPointConfiguration: SesMailManagerIngressPointIngressPointConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfiguration">SesMailManagerIngressPointIngressPointConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ses_mail_manager_ingress_point#ingress_point_configuration SesMailManagerIngressPoint#ingress_point_configuration}.

---

##### `ingressPointName`<sup>Optional</sup> <a name="ingressPointName" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointConfig.property.ingressPointName"></a>

```typescript
public readonly ingressPointName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ses_mail_manager_ingress_point#ingress_point_name SesMailManagerIngressPoint#ingress_point_name}.

---

##### `networkConfiguration`<sup>Optional</sup> <a name="networkConfiguration" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointConfig.property.networkConfiguration"></a>

```typescript
public readonly networkConfiguration: SesMailManagerIngressPointNetworkConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfiguration">SesMailManagerIngressPointNetworkConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ses_mail_manager_ingress_point#network_configuration SesMailManagerIngressPoint#network_configuration}.

---

##### `statusToUpdate`<sup>Optional</sup> <a name="statusToUpdate" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointConfig.property.statusToUpdate"></a>

```typescript
public readonly statusToUpdate: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ses_mail_manager_ingress_point#status_to_update SesMailManagerIngressPoint#status_to_update}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | SesMailManagerIngressPointTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointTags">SesMailManagerIngressPointTags</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ses_mail_manager_ingress_point#tags SesMailManagerIngressPoint#tags}.

---

##### `tlsPolicy`<sup>Optional</sup> <a name="tlsPolicy" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointConfig.property.tlsPolicy"></a>

```typescript
public readonly tlsPolicy: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ses_mail_manager_ingress_point#tls_policy SesMailManagerIngressPoint#tls_policy}.

---

### SesMailManagerIngressPointIngressPointConfiguration <a name="SesMailManagerIngressPointIngressPointConfiguration" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfiguration.Initializer"></a>

```typescript
import { sesMailManagerIngressPoint } from '@cdktn/provider-awscc'

const sesMailManagerIngressPointIngressPointConfiguration: sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfiguration.property.secretArn">secretArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ses_mail_manager_ingress_point#secret_arn SesMailManagerIngressPoint#secret_arn}. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfiguration.property.smtpPassword">smtpPassword</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ses_mail_manager_ingress_point#smtp_password SesMailManagerIngressPoint#smtp_password}. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfiguration.property.tlsAuthConfiguration">tlsAuthConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfiguration">SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ses_mail_manager_ingress_point#tls_auth_configuration SesMailManagerIngressPoint#tls_auth_configuration}. |

---

##### `secretArn`<sup>Optional</sup> <a name="secretArn" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfiguration.property.secretArn"></a>

```typescript
public readonly secretArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ses_mail_manager_ingress_point#secret_arn SesMailManagerIngressPoint#secret_arn}.

---

##### `smtpPassword`<sup>Optional</sup> <a name="smtpPassword" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfiguration.property.smtpPassword"></a>

```typescript
public readonly smtpPassword: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ses_mail_manager_ingress_point#smtp_password SesMailManagerIngressPoint#smtp_password}.

---

##### `tlsAuthConfiguration`<sup>Optional</sup> <a name="tlsAuthConfiguration" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfiguration.property.tlsAuthConfiguration"></a>

```typescript
public readonly tlsAuthConfiguration: SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfiguration">SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ses_mail_manager_ingress_point#tls_auth_configuration SesMailManagerIngressPoint#tls_auth_configuration}.

---

### SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfiguration <a name="SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfiguration" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfiguration.Initializer"></a>

```typescript
import { sesMailManagerIngressPoint } from '@cdktn/provider-awscc'

const sesMailManagerIngressPointIngressPointConfigurationTlsAuthConfiguration: sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfiguration.property.trustStore">trustStore</a></code> | <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStore">SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStore</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ses_mail_manager_ingress_point#trust_store SesMailManagerIngressPoint#trust_store}. |

---

##### `trustStore`<sup>Optional</sup> <a name="trustStore" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfiguration.property.trustStore"></a>

```typescript
public readonly trustStore: SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStore;
```

- *Type:* <a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStore">SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStore</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ses_mail_manager_ingress_point#trust_store SesMailManagerIngressPoint#trust_store}.

---

### SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStore <a name="SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStore" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStore"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStore.Initializer"></a>

```typescript
import { sesMailManagerIngressPoint } from '@cdktn/provider-awscc'

const sesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStore: sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStore = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStore.property.caContent">caContent</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ses_mail_manager_ingress_point#ca_content SesMailManagerIngressPoint#ca_content}. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStore.property.crlContent">crlContent</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ses_mail_manager_ingress_point#crl_content SesMailManagerIngressPoint#crl_content}. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStore.property.kmsKeyArn">kmsKeyArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ses_mail_manager_ingress_point#kms_key_arn SesMailManagerIngressPoint#kms_key_arn}. |

---

##### `caContent`<sup>Optional</sup> <a name="caContent" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStore.property.caContent"></a>

```typescript
public readonly caContent: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ses_mail_manager_ingress_point#ca_content SesMailManagerIngressPoint#ca_content}.

---

##### `crlContent`<sup>Optional</sup> <a name="crlContent" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStore.property.crlContent"></a>

```typescript
public readonly crlContent: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ses_mail_manager_ingress_point#crl_content SesMailManagerIngressPoint#crl_content}.

---

##### `kmsKeyArn`<sup>Optional</sup> <a name="kmsKeyArn" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStore.property.kmsKeyArn"></a>

```typescript
public readonly kmsKeyArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ses_mail_manager_ingress_point#kms_key_arn SesMailManagerIngressPoint#kms_key_arn}.

---

### SesMailManagerIngressPointNetworkConfiguration <a name="SesMailManagerIngressPointNetworkConfiguration" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfiguration.Initializer"></a>

```typescript
import { sesMailManagerIngressPoint } from '@cdktn/provider-awscc'

const sesMailManagerIngressPointNetworkConfiguration: sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfiguration.property.privateNetworkConfiguration">privateNetworkConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationPrivateNetworkConfiguration">SesMailManagerIngressPointNetworkConfigurationPrivateNetworkConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ses_mail_manager_ingress_point#private_network_configuration SesMailManagerIngressPoint#private_network_configuration}. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfiguration.property.publicNetworkConfiguration">publicNetworkConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationPublicNetworkConfiguration">SesMailManagerIngressPointNetworkConfigurationPublicNetworkConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ses_mail_manager_ingress_point#public_network_configuration SesMailManagerIngressPoint#public_network_configuration}. |

---

##### `privateNetworkConfiguration`<sup>Optional</sup> <a name="privateNetworkConfiguration" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfiguration.property.privateNetworkConfiguration"></a>

```typescript
public readonly privateNetworkConfiguration: SesMailManagerIngressPointNetworkConfigurationPrivateNetworkConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationPrivateNetworkConfiguration">SesMailManagerIngressPointNetworkConfigurationPrivateNetworkConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ses_mail_manager_ingress_point#private_network_configuration SesMailManagerIngressPoint#private_network_configuration}.

---

##### `publicNetworkConfiguration`<sup>Optional</sup> <a name="publicNetworkConfiguration" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfiguration.property.publicNetworkConfiguration"></a>

```typescript
public readonly publicNetworkConfiguration: SesMailManagerIngressPointNetworkConfigurationPublicNetworkConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationPublicNetworkConfiguration">SesMailManagerIngressPointNetworkConfigurationPublicNetworkConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ses_mail_manager_ingress_point#public_network_configuration SesMailManagerIngressPoint#public_network_configuration}.

---

### SesMailManagerIngressPointNetworkConfigurationPrivateNetworkConfiguration <a name="SesMailManagerIngressPointNetworkConfigurationPrivateNetworkConfiguration" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationPrivateNetworkConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationPrivateNetworkConfiguration.Initializer"></a>

```typescript
import { sesMailManagerIngressPoint } from '@cdktn/provider-awscc'

const sesMailManagerIngressPointNetworkConfigurationPrivateNetworkConfiguration: sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationPrivateNetworkConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationPrivateNetworkConfiguration.property.vpcEndpointId">vpcEndpointId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ses_mail_manager_ingress_point#vpc_endpoint_id SesMailManagerIngressPoint#vpc_endpoint_id}. |

---

##### `vpcEndpointId`<sup>Optional</sup> <a name="vpcEndpointId" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationPrivateNetworkConfiguration.property.vpcEndpointId"></a>

```typescript
public readonly vpcEndpointId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ses_mail_manager_ingress_point#vpc_endpoint_id SesMailManagerIngressPoint#vpc_endpoint_id}.

---

### SesMailManagerIngressPointNetworkConfigurationPublicNetworkConfiguration <a name="SesMailManagerIngressPointNetworkConfigurationPublicNetworkConfiguration" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationPublicNetworkConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationPublicNetworkConfiguration.Initializer"></a>

```typescript
import { sesMailManagerIngressPoint } from '@cdktn/provider-awscc'

const sesMailManagerIngressPointNetworkConfigurationPublicNetworkConfiguration: sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationPublicNetworkConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationPublicNetworkConfiguration.property.ipType">ipType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ses_mail_manager_ingress_point#ip_type SesMailManagerIngressPoint#ip_type}. |

---

##### `ipType`<sup>Optional</sup> <a name="ipType" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationPublicNetworkConfiguration.property.ipType"></a>

```typescript
public readonly ipType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ses_mail_manager_ingress_point#ip_type SesMailManagerIngressPoint#ip_type}.

---

### SesMailManagerIngressPointTags <a name="SesMailManagerIngressPointTags" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointTags.Initializer"></a>

```typescript
import { sesMailManagerIngressPoint } from '@cdktn/provider-awscc'

const sesMailManagerIngressPointTags: sesMailManagerIngressPoint.SesMailManagerIngressPointTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointTags.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ses_mail_manager_ingress_point#key SesMailManagerIngressPoint#key}. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointTags.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ses_mail_manager_ingress_point#value SesMailManagerIngressPoint#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ses_mail_manager_ingress_point#key SesMailManagerIngressPoint#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ses_mail_manager_ingress_point#value SesMailManagerIngressPoint#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### SesMailManagerIngressPointIngressPointConfigurationOutputReference <a name="SesMailManagerIngressPointIngressPointConfigurationOutputReference" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationOutputReference.Initializer"></a>

```typescript
import { sesMailManagerIngressPoint } from '@cdktn/provider-awscc'

new sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationOutputReference.putTlsAuthConfiguration">putTlsAuthConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationOutputReference.resetSecretArn">resetSecretArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationOutputReference.resetSmtpPassword">resetSmtpPassword</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationOutputReference.resetTlsAuthConfiguration">resetTlsAuthConfiguration</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putTlsAuthConfiguration` <a name="putTlsAuthConfiguration" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationOutputReference.putTlsAuthConfiguration"></a>

```typescript
public putTlsAuthConfiguration(value: SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationOutputReference.putTlsAuthConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfiguration">SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfiguration</a>

---

##### `resetSecretArn` <a name="resetSecretArn" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationOutputReference.resetSecretArn"></a>

```typescript
public resetSecretArn(): void
```

##### `resetSmtpPassword` <a name="resetSmtpPassword" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationOutputReference.resetSmtpPassword"></a>

```typescript
public resetSmtpPassword(): void
```

##### `resetTlsAuthConfiguration` <a name="resetTlsAuthConfiguration" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationOutputReference.resetTlsAuthConfiguration"></a>

```typescript
public resetTlsAuthConfiguration(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationOutputReference.property.tlsAuthConfiguration">tlsAuthConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationOutputReference">SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationOutputReference.property.secretArnInput">secretArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationOutputReference.property.smtpPasswordInput">smtpPasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationOutputReference.property.tlsAuthConfigurationInput">tlsAuthConfigurationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfiguration">SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationOutputReference.property.secretArn">secretArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationOutputReference.property.smtpPassword">smtpPassword</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfiguration">SesMailManagerIngressPointIngressPointConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `tlsAuthConfiguration`<sup>Required</sup> <a name="tlsAuthConfiguration" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationOutputReference.property.tlsAuthConfiguration"></a>

```typescript
public readonly tlsAuthConfiguration: SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationOutputReference">SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationOutputReference</a>

---

##### `secretArnInput`<sup>Optional</sup> <a name="secretArnInput" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationOutputReference.property.secretArnInput"></a>

```typescript
public readonly secretArnInput: string;
```

- *Type:* string

---

##### `smtpPasswordInput`<sup>Optional</sup> <a name="smtpPasswordInput" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationOutputReference.property.smtpPasswordInput"></a>

```typescript
public readonly smtpPasswordInput: string;
```

- *Type:* string

---

##### `tlsAuthConfigurationInput`<sup>Optional</sup> <a name="tlsAuthConfigurationInput" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationOutputReference.property.tlsAuthConfigurationInput"></a>

```typescript
public readonly tlsAuthConfigurationInput: IResolvable | SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfiguration">SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfiguration</a>

---

##### `secretArn`<sup>Required</sup> <a name="secretArn" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationOutputReference.property.secretArn"></a>

```typescript
public readonly secretArn: string;
```

- *Type:* string

---

##### `smtpPassword`<sup>Required</sup> <a name="smtpPassword" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationOutputReference.property.smtpPassword"></a>

```typescript
public readonly smtpPassword: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SesMailManagerIngressPointIngressPointConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfiguration">SesMailManagerIngressPointIngressPointConfiguration</a>

---


### SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationOutputReference <a name="SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationOutputReference" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationOutputReference.Initializer"></a>

```typescript
import { sesMailManagerIngressPoint } from '@cdktn/provider-awscc'

new sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationOutputReference.putTrustStore">putTrustStore</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationOutputReference.resetTrustStore">resetTrustStore</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putTrustStore` <a name="putTrustStore" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationOutputReference.putTrustStore"></a>

```typescript
public putTrustStore(value: SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStore): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationOutputReference.putTrustStore.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStore">SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStore</a>

---

##### `resetTrustStore` <a name="resetTrustStore" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationOutputReference.resetTrustStore"></a>

```typescript
public resetTrustStore(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationOutputReference.property.trustStore">trustStore</a></code> | <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference">SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationOutputReference.property.trustStoreInput">trustStoreInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStore">SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStore</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfiguration">SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `trustStore`<sup>Required</sup> <a name="trustStore" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationOutputReference.property.trustStore"></a>

```typescript
public readonly trustStore: SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference">SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference</a>

---

##### `trustStoreInput`<sup>Optional</sup> <a name="trustStoreInput" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationOutputReference.property.trustStoreInput"></a>

```typescript
public readonly trustStoreInput: IResolvable | SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStore;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStore">SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStore</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfiguration">SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfiguration</a>

---


### SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference <a name="SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference.Initializer"></a>

```typescript
import { sesMailManagerIngressPoint } from '@cdktn/provider-awscc'

new sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference.resetCaContent">resetCaContent</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference.resetCrlContent">resetCrlContent</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference.resetKmsKeyArn">resetKmsKeyArn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCaContent` <a name="resetCaContent" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference.resetCaContent"></a>

```typescript
public resetCaContent(): void
```

##### `resetCrlContent` <a name="resetCrlContent" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference.resetCrlContent"></a>

```typescript
public resetCrlContent(): void
```

##### `resetKmsKeyArn` <a name="resetKmsKeyArn" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference.resetKmsKeyArn"></a>

```typescript
public resetKmsKeyArn(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference.property.caContentInput">caContentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference.property.crlContentInput">crlContentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference.property.kmsKeyArnInput">kmsKeyArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference.property.caContent">caContent</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference.property.crlContent">crlContent</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference.property.kmsKeyArn">kmsKeyArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStore">SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStore</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `caContentInput`<sup>Optional</sup> <a name="caContentInput" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference.property.caContentInput"></a>

```typescript
public readonly caContentInput: string;
```

- *Type:* string

---

##### `crlContentInput`<sup>Optional</sup> <a name="crlContentInput" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference.property.crlContentInput"></a>

```typescript
public readonly crlContentInput: string;
```

- *Type:* string

---

##### `kmsKeyArnInput`<sup>Optional</sup> <a name="kmsKeyArnInput" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference.property.kmsKeyArnInput"></a>

```typescript
public readonly kmsKeyArnInput: string;
```

- *Type:* string

---

##### `caContent`<sup>Required</sup> <a name="caContent" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference.property.caContent"></a>

```typescript
public readonly caContent: string;
```

- *Type:* string

---

##### `crlContent`<sup>Required</sup> <a name="crlContent" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference.property.crlContent"></a>

```typescript
public readonly crlContent: string;
```

- *Type:* string

---

##### `kmsKeyArn`<sup>Required</sup> <a name="kmsKeyArn" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference.property.kmsKeyArn"></a>

```typescript
public readonly kmsKeyArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStore;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStore">SesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStore</a>

---


### SesMailManagerIngressPointNetworkConfigurationOutputReference <a name="SesMailManagerIngressPointNetworkConfigurationOutputReference" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationOutputReference.Initializer"></a>

```typescript
import { sesMailManagerIngressPoint } from '@cdktn/provider-awscc'

new sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationOutputReference.putPrivateNetworkConfiguration">putPrivateNetworkConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationOutputReference.putPublicNetworkConfiguration">putPublicNetworkConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationOutputReference.resetPrivateNetworkConfiguration">resetPrivateNetworkConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationOutputReference.resetPublicNetworkConfiguration">resetPublicNetworkConfiguration</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putPrivateNetworkConfiguration` <a name="putPrivateNetworkConfiguration" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationOutputReference.putPrivateNetworkConfiguration"></a>

```typescript
public putPrivateNetworkConfiguration(value: SesMailManagerIngressPointNetworkConfigurationPrivateNetworkConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationOutputReference.putPrivateNetworkConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationPrivateNetworkConfiguration">SesMailManagerIngressPointNetworkConfigurationPrivateNetworkConfiguration</a>

---

##### `putPublicNetworkConfiguration` <a name="putPublicNetworkConfiguration" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationOutputReference.putPublicNetworkConfiguration"></a>

```typescript
public putPublicNetworkConfiguration(value: SesMailManagerIngressPointNetworkConfigurationPublicNetworkConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationOutputReference.putPublicNetworkConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationPublicNetworkConfiguration">SesMailManagerIngressPointNetworkConfigurationPublicNetworkConfiguration</a>

---

##### `resetPrivateNetworkConfiguration` <a name="resetPrivateNetworkConfiguration" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationOutputReference.resetPrivateNetworkConfiguration"></a>

```typescript
public resetPrivateNetworkConfiguration(): void
```

##### `resetPublicNetworkConfiguration` <a name="resetPublicNetworkConfiguration" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationOutputReference.resetPublicNetworkConfiguration"></a>

```typescript
public resetPublicNetworkConfiguration(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationOutputReference.property.privateNetworkConfiguration">privateNetworkConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationPrivateNetworkConfigurationOutputReference">SesMailManagerIngressPointNetworkConfigurationPrivateNetworkConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationOutputReference.property.publicNetworkConfiguration">publicNetworkConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationPublicNetworkConfigurationOutputReference">SesMailManagerIngressPointNetworkConfigurationPublicNetworkConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationOutputReference.property.privateNetworkConfigurationInput">privateNetworkConfigurationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationPrivateNetworkConfiguration">SesMailManagerIngressPointNetworkConfigurationPrivateNetworkConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationOutputReference.property.publicNetworkConfigurationInput">publicNetworkConfigurationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationPublicNetworkConfiguration">SesMailManagerIngressPointNetworkConfigurationPublicNetworkConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfiguration">SesMailManagerIngressPointNetworkConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `privateNetworkConfiguration`<sup>Required</sup> <a name="privateNetworkConfiguration" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationOutputReference.property.privateNetworkConfiguration"></a>

```typescript
public readonly privateNetworkConfiguration: SesMailManagerIngressPointNetworkConfigurationPrivateNetworkConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationPrivateNetworkConfigurationOutputReference">SesMailManagerIngressPointNetworkConfigurationPrivateNetworkConfigurationOutputReference</a>

---

##### `publicNetworkConfiguration`<sup>Required</sup> <a name="publicNetworkConfiguration" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationOutputReference.property.publicNetworkConfiguration"></a>

```typescript
public readonly publicNetworkConfiguration: SesMailManagerIngressPointNetworkConfigurationPublicNetworkConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationPublicNetworkConfigurationOutputReference">SesMailManagerIngressPointNetworkConfigurationPublicNetworkConfigurationOutputReference</a>

---

##### `privateNetworkConfigurationInput`<sup>Optional</sup> <a name="privateNetworkConfigurationInput" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationOutputReference.property.privateNetworkConfigurationInput"></a>

```typescript
public readonly privateNetworkConfigurationInput: IResolvable | SesMailManagerIngressPointNetworkConfigurationPrivateNetworkConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationPrivateNetworkConfiguration">SesMailManagerIngressPointNetworkConfigurationPrivateNetworkConfiguration</a>

---

##### `publicNetworkConfigurationInput`<sup>Optional</sup> <a name="publicNetworkConfigurationInput" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationOutputReference.property.publicNetworkConfigurationInput"></a>

```typescript
public readonly publicNetworkConfigurationInput: IResolvable | SesMailManagerIngressPointNetworkConfigurationPublicNetworkConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationPublicNetworkConfiguration">SesMailManagerIngressPointNetworkConfigurationPublicNetworkConfiguration</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SesMailManagerIngressPointNetworkConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfiguration">SesMailManagerIngressPointNetworkConfiguration</a>

---


### SesMailManagerIngressPointNetworkConfigurationPrivateNetworkConfigurationOutputReference <a name="SesMailManagerIngressPointNetworkConfigurationPrivateNetworkConfigurationOutputReference" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationPrivateNetworkConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationPrivateNetworkConfigurationOutputReference.Initializer"></a>

```typescript
import { sesMailManagerIngressPoint } from '@cdktn/provider-awscc'

new sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationPrivateNetworkConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationPrivateNetworkConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationPrivateNetworkConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationPrivateNetworkConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationPrivateNetworkConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationPrivateNetworkConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationPrivateNetworkConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationPrivateNetworkConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationPrivateNetworkConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationPrivateNetworkConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationPrivateNetworkConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationPrivateNetworkConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationPrivateNetworkConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationPrivateNetworkConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationPrivateNetworkConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationPrivateNetworkConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationPrivateNetworkConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationPrivateNetworkConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationPrivateNetworkConfigurationOutputReference.resetVpcEndpointId">resetVpcEndpointId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationPrivateNetworkConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationPrivateNetworkConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationPrivateNetworkConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationPrivateNetworkConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationPrivateNetworkConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationPrivateNetworkConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationPrivateNetworkConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationPrivateNetworkConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationPrivateNetworkConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationPrivateNetworkConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationPrivateNetworkConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationPrivateNetworkConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationPrivateNetworkConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationPrivateNetworkConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationPrivateNetworkConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationPrivateNetworkConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationPrivateNetworkConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationPrivateNetworkConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationPrivateNetworkConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationPrivateNetworkConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationPrivateNetworkConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationPrivateNetworkConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationPrivateNetworkConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationPrivateNetworkConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetVpcEndpointId` <a name="resetVpcEndpointId" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationPrivateNetworkConfigurationOutputReference.resetVpcEndpointId"></a>

```typescript
public resetVpcEndpointId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationPrivateNetworkConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationPrivateNetworkConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationPrivateNetworkConfigurationOutputReference.property.vpcEndpointIdInput">vpcEndpointIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationPrivateNetworkConfigurationOutputReference.property.vpcEndpointId">vpcEndpointId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationPrivateNetworkConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationPrivateNetworkConfiguration">SesMailManagerIngressPointNetworkConfigurationPrivateNetworkConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationPrivateNetworkConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationPrivateNetworkConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `vpcEndpointIdInput`<sup>Optional</sup> <a name="vpcEndpointIdInput" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationPrivateNetworkConfigurationOutputReference.property.vpcEndpointIdInput"></a>

```typescript
public readonly vpcEndpointIdInput: string;
```

- *Type:* string

---

##### `vpcEndpointId`<sup>Required</sup> <a name="vpcEndpointId" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationPrivateNetworkConfigurationOutputReference.property.vpcEndpointId"></a>

```typescript
public readonly vpcEndpointId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationPrivateNetworkConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SesMailManagerIngressPointNetworkConfigurationPrivateNetworkConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationPrivateNetworkConfiguration">SesMailManagerIngressPointNetworkConfigurationPrivateNetworkConfiguration</a>

---


### SesMailManagerIngressPointNetworkConfigurationPublicNetworkConfigurationOutputReference <a name="SesMailManagerIngressPointNetworkConfigurationPublicNetworkConfigurationOutputReference" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationPublicNetworkConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationPublicNetworkConfigurationOutputReference.Initializer"></a>

```typescript
import { sesMailManagerIngressPoint } from '@cdktn/provider-awscc'

new sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationPublicNetworkConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationPublicNetworkConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationPublicNetworkConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationPublicNetworkConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationPublicNetworkConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationPublicNetworkConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationPublicNetworkConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationPublicNetworkConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationPublicNetworkConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationPublicNetworkConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationPublicNetworkConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationPublicNetworkConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationPublicNetworkConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationPublicNetworkConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationPublicNetworkConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationPublicNetworkConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationPublicNetworkConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationPublicNetworkConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationPublicNetworkConfigurationOutputReference.resetIpType">resetIpType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationPublicNetworkConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationPublicNetworkConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationPublicNetworkConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationPublicNetworkConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationPublicNetworkConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationPublicNetworkConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationPublicNetworkConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationPublicNetworkConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationPublicNetworkConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationPublicNetworkConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationPublicNetworkConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationPublicNetworkConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationPublicNetworkConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationPublicNetworkConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationPublicNetworkConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationPublicNetworkConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationPublicNetworkConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationPublicNetworkConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationPublicNetworkConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationPublicNetworkConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationPublicNetworkConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationPublicNetworkConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationPublicNetworkConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationPublicNetworkConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIpType` <a name="resetIpType" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationPublicNetworkConfigurationOutputReference.resetIpType"></a>

```typescript
public resetIpType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationPublicNetworkConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationPublicNetworkConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationPublicNetworkConfigurationOutputReference.property.ipTypeInput">ipTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationPublicNetworkConfigurationOutputReference.property.ipType">ipType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationPublicNetworkConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationPublicNetworkConfiguration">SesMailManagerIngressPointNetworkConfigurationPublicNetworkConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationPublicNetworkConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationPublicNetworkConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `ipTypeInput`<sup>Optional</sup> <a name="ipTypeInput" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationPublicNetworkConfigurationOutputReference.property.ipTypeInput"></a>

```typescript
public readonly ipTypeInput: string;
```

- *Type:* string

---

##### `ipType`<sup>Required</sup> <a name="ipType" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationPublicNetworkConfigurationOutputReference.property.ipType"></a>

```typescript
public readonly ipType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationPublicNetworkConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SesMailManagerIngressPointNetworkConfigurationPublicNetworkConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointNetworkConfigurationPublicNetworkConfiguration">SesMailManagerIngressPointNetworkConfigurationPublicNetworkConfiguration</a>

---


### SesMailManagerIngressPointTagsList <a name="SesMailManagerIngressPointTagsList" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointTagsList.Initializer"></a>

```typescript
import { sesMailManagerIngressPoint } from '@cdktn/provider-awscc'

new sesMailManagerIngressPoint.SesMailManagerIngressPointTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointTagsList.get"></a>

```typescript
public get(index: number): SesMailManagerIngressPointTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointTags">SesMailManagerIngressPointTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SesMailManagerIngressPointTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointTags">SesMailManagerIngressPointTags</a>[]

---


### SesMailManagerIngressPointTagsOutputReference <a name="SesMailManagerIngressPointTagsOutputReference" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointTagsOutputReference.Initializer"></a>

```typescript
import { sesMailManagerIngressPoint } from '@cdktn/provider-awscc'

new sesMailManagerIngressPoint.SesMailManagerIngressPointTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointTags">SesMailManagerIngressPointTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SesMailManagerIngressPointTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sesMailManagerIngressPoint.SesMailManagerIngressPointTags">SesMailManagerIngressPointTags</a>

---




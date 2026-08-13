# `s3OutpostsAccessPoint` Submodule <a name="`s3OutpostsAccessPoint` Submodule" id="@cdktn/provider-awscc.s3OutpostsAccessPoint"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### S3OutpostsAccessPoint <a name="S3OutpostsAccessPoint" id="@cdktn/provider-awscc.s3OutpostsAccessPoint.S3OutpostsAccessPoint"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/s3outposts_access_point awscc_s3outposts_access_point}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3OutpostsAccessPoint.S3OutpostsAccessPoint.Initializer"></a>

```typescript
import { s3OutpostsAccessPoint } from '@cdktn/provider-awscc'

new s3OutpostsAccessPoint.S3OutpostsAccessPoint(scope: Construct, id: string, config: S3OutpostsAccessPointConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsAccessPoint.S3OutpostsAccessPoint.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsAccessPoint.S3OutpostsAccessPoint.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsAccessPoint.S3OutpostsAccessPoint.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.s3OutpostsAccessPoint.S3OutpostsAccessPointConfig">S3OutpostsAccessPointConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.s3OutpostsAccessPoint.S3OutpostsAccessPoint.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.s3OutpostsAccessPoint.S3OutpostsAccessPoint.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.s3OutpostsAccessPoint.S3OutpostsAccessPoint.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.s3OutpostsAccessPoint.S3OutpostsAccessPointConfig">S3OutpostsAccessPointConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsAccessPoint.S3OutpostsAccessPoint.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsAccessPoint.S3OutpostsAccessPoint.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsAccessPoint.S3OutpostsAccessPoint.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsAccessPoint.S3OutpostsAccessPoint.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsAccessPoint.S3OutpostsAccessPoint.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsAccessPoint.S3OutpostsAccessPoint.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsAccessPoint.S3OutpostsAccessPoint.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsAccessPoint.S3OutpostsAccessPoint.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsAccessPoint.S3OutpostsAccessPoint.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsAccessPoint.S3OutpostsAccessPoint.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsAccessPoint.S3OutpostsAccessPoint.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsAccessPoint.S3OutpostsAccessPoint.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsAccessPoint.S3OutpostsAccessPoint.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsAccessPoint.S3OutpostsAccessPoint.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsAccessPoint.S3OutpostsAccessPoint.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsAccessPoint.S3OutpostsAccessPoint.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsAccessPoint.S3OutpostsAccessPoint.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsAccessPoint.S3OutpostsAccessPoint.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsAccessPoint.S3OutpostsAccessPoint.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsAccessPoint.S3OutpostsAccessPoint.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsAccessPoint.S3OutpostsAccessPoint.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsAccessPoint.S3OutpostsAccessPoint.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsAccessPoint.S3OutpostsAccessPoint.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsAccessPoint.S3OutpostsAccessPoint.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsAccessPoint.S3OutpostsAccessPoint.putVpcConfiguration">putVpcConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsAccessPoint.S3OutpostsAccessPoint.resetPolicy">resetPolicy</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.s3OutpostsAccessPoint.S3OutpostsAccessPoint.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.s3OutpostsAccessPoint.S3OutpostsAccessPoint.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.s3OutpostsAccessPoint.S3OutpostsAccessPoint.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.s3OutpostsAccessPoint.S3OutpostsAccessPoint.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.s3OutpostsAccessPoint.S3OutpostsAccessPoint.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.s3OutpostsAccessPoint.S3OutpostsAccessPoint.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.s3OutpostsAccessPoint.S3OutpostsAccessPoint.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.s3OutpostsAccessPoint.S3OutpostsAccessPoint.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.s3OutpostsAccessPoint.S3OutpostsAccessPoint.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.s3OutpostsAccessPoint.S3OutpostsAccessPoint.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.s3OutpostsAccessPoint.S3OutpostsAccessPoint.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.s3OutpostsAccessPoint.S3OutpostsAccessPoint.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.s3OutpostsAccessPoint.S3OutpostsAccessPoint.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.s3OutpostsAccessPoint.S3OutpostsAccessPoint.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.s3OutpostsAccessPoint.S3OutpostsAccessPoint.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3OutpostsAccessPoint.S3OutpostsAccessPoint.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.s3OutpostsAccessPoint.S3OutpostsAccessPoint.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3OutpostsAccessPoint.S3OutpostsAccessPoint.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.s3OutpostsAccessPoint.S3OutpostsAccessPoint.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3OutpostsAccessPoint.S3OutpostsAccessPoint.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.s3OutpostsAccessPoint.S3OutpostsAccessPoint.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3OutpostsAccessPoint.S3OutpostsAccessPoint.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.s3OutpostsAccessPoint.S3OutpostsAccessPoint.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3OutpostsAccessPoint.S3OutpostsAccessPoint.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.s3OutpostsAccessPoint.S3OutpostsAccessPoint.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3OutpostsAccessPoint.S3OutpostsAccessPoint.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.s3OutpostsAccessPoint.S3OutpostsAccessPoint.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3OutpostsAccessPoint.S3OutpostsAccessPoint.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.s3OutpostsAccessPoint.S3OutpostsAccessPoint.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3OutpostsAccessPoint.S3OutpostsAccessPoint.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.s3OutpostsAccessPoint.S3OutpostsAccessPoint.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3OutpostsAccessPoint.S3OutpostsAccessPoint.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.s3OutpostsAccessPoint.S3OutpostsAccessPoint.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.s3OutpostsAccessPoint.S3OutpostsAccessPoint.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.s3OutpostsAccessPoint.S3OutpostsAccessPoint.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.s3OutpostsAccessPoint.S3OutpostsAccessPoint.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.s3OutpostsAccessPoint.S3OutpostsAccessPoint.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3OutpostsAccessPoint.S3OutpostsAccessPoint.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.s3OutpostsAccessPoint.S3OutpostsAccessPoint.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.s3OutpostsAccessPoint.S3OutpostsAccessPoint.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.s3OutpostsAccessPoint.S3OutpostsAccessPoint.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.s3OutpostsAccessPoint.S3OutpostsAccessPoint.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.s3OutpostsAccessPoint.S3OutpostsAccessPoint.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.s3OutpostsAccessPoint.S3OutpostsAccessPoint.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.s3OutpostsAccessPoint.S3OutpostsAccessPoint.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putVpcConfiguration` <a name="putVpcConfiguration" id="@cdktn/provider-awscc.s3OutpostsAccessPoint.S3OutpostsAccessPoint.putVpcConfiguration"></a>

```typescript
public putVpcConfiguration(value: S3OutpostsAccessPointVpcConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.s3OutpostsAccessPoint.S3OutpostsAccessPoint.putVpcConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.s3OutpostsAccessPoint.S3OutpostsAccessPointVpcConfiguration">S3OutpostsAccessPointVpcConfiguration</a>

---

##### `resetPolicy` <a name="resetPolicy" id="@cdktn/provider-awscc.s3OutpostsAccessPoint.S3OutpostsAccessPoint.resetPolicy"></a>

```typescript
public resetPolicy(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsAccessPoint.S3OutpostsAccessPoint.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsAccessPoint.S3OutpostsAccessPoint.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsAccessPoint.S3OutpostsAccessPoint.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsAccessPoint.S3OutpostsAccessPoint.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a S3OutpostsAccessPoint resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.s3OutpostsAccessPoint.S3OutpostsAccessPoint.isConstruct"></a>

```typescript
import { s3OutpostsAccessPoint } from '@cdktn/provider-awscc'

s3OutpostsAccessPoint.S3OutpostsAccessPoint.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.s3OutpostsAccessPoint.S3OutpostsAccessPoint.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.s3OutpostsAccessPoint.S3OutpostsAccessPoint.isTerraformElement"></a>

```typescript
import { s3OutpostsAccessPoint } from '@cdktn/provider-awscc'

s3OutpostsAccessPoint.S3OutpostsAccessPoint.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.s3OutpostsAccessPoint.S3OutpostsAccessPoint.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.s3OutpostsAccessPoint.S3OutpostsAccessPoint.isTerraformResource"></a>

```typescript
import { s3OutpostsAccessPoint } from '@cdktn/provider-awscc'

s3OutpostsAccessPoint.S3OutpostsAccessPoint.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.s3OutpostsAccessPoint.S3OutpostsAccessPoint.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.s3OutpostsAccessPoint.S3OutpostsAccessPoint.generateConfigForImport"></a>

```typescript
import { s3OutpostsAccessPoint } from '@cdktn/provider-awscc'

s3OutpostsAccessPoint.S3OutpostsAccessPoint.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a S3OutpostsAccessPoint resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.s3OutpostsAccessPoint.S3OutpostsAccessPoint.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.s3OutpostsAccessPoint.S3OutpostsAccessPoint.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the S3OutpostsAccessPoint to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.s3OutpostsAccessPoint.S3OutpostsAccessPoint.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing S3OutpostsAccessPoint that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/s3outposts_access_point#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.s3OutpostsAccessPoint.S3OutpostsAccessPoint.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the S3OutpostsAccessPoint to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsAccessPoint.S3OutpostsAccessPoint.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsAccessPoint.S3OutpostsAccessPoint.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsAccessPoint.S3OutpostsAccessPoint.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsAccessPoint.S3OutpostsAccessPoint.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsAccessPoint.S3OutpostsAccessPoint.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsAccessPoint.S3OutpostsAccessPoint.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsAccessPoint.S3OutpostsAccessPoint.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsAccessPoint.S3OutpostsAccessPoint.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsAccessPoint.S3OutpostsAccessPoint.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsAccessPoint.S3OutpostsAccessPoint.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsAccessPoint.S3OutpostsAccessPoint.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsAccessPoint.S3OutpostsAccessPoint.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsAccessPoint.S3OutpostsAccessPoint.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsAccessPoint.S3OutpostsAccessPoint.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsAccessPoint.S3OutpostsAccessPoint.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsAccessPoint.S3OutpostsAccessPoint.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsAccessPoint.S3OutpostsAccessPoint.property.vpcConfiguration">vpcConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.s3OutpostsAccessPoint.S3OutpostsAccessPointVpcConfigurationOutputReference">S3OutpostsAccessPointVpcConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsAccessPoint.S3OutpostsAccessPoint.property.bucketInput">bucketInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsAccessPoint.S3OutpostsAccessPoint.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsAccessPoint.S3OutpostsAccessPoint.property.policyInput">policyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsAccessPoint.S3OutpostsAccessPoint.property.vpcConfigurationInput">vpcConfigurationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.s3OutpostsAccessPoint.S3OutpostsAccessPointVpcConfiguration">S3OutpostsAccessPointVpcConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsAccessPoint.S3OutpostsAccessPoint.property.bucket">bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsAccessPoint.S3OutpostsAccessPoint.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsAccessPoint.S3OutpostsAccessPoint.property.policy">policy</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.s3OutpostsAccessPoint.S3OutpostsAccessPoint.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.s3OutpostsAccessPoint.S3OutpostsAccessPoint.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.s3OutpostsAccessPoint.S3OutpostsAccessPoint.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.s3OutpostsAccessPoint.S3OutpostsAccessPoint.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.s3OutpostsAccessPoint.S3OutpostsAccessPoint.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.s3OutpostsAccessPoint.S3OutpostsAccessPoint.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.s3OutpostsAccessPoint.S3OutpostsAccessPoint.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.s3OutpostsAccessPoint.S3OutpostsAccessPoint.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.s3OutpostsAccessPoint.S3OutpostsAccessPoint.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.s3OutpostsAccessPoint.S3OutpostsAccessPoint.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.s3OutpostsAccessPoint.S3OutpostsAccessPoint.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.s3OutpostsAccessPoint.S3OutpostsAccessPoint.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.s3OutpostsAccessPoint.S3OutpostsAccessPoint.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.s3OutpostsAccessPoint.S3OutpostsAccessPoint.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.s3OutpostsAccessPoint.S3OutpostsAccessPoint.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.s3OutpostsAccessPoint.S3OutpostsAccessPoint.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `vpcConfiguration`<sup>Required</sup> <a name="vpcConfiguration" id="@cdktn/provider-awscc.s3OutpostsAccessPoint.S3OutpostsAccessPoint.property.vpcConfiguration"></a>

```typescript
public readonly vpcConfiguration: S3OutpostsAccessPointVpcConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.s3OutpostsAccessPoint.S3OutpostsAccessPointVpcConfigurationOutputReference">S3OutpostsAccessPointVpcConfigurationOutputReference</a>

---

##### `bucketInput`<sup>Optional</sup> <a name="bucketInput" id="@cdktn/provider-awscc.s3OutpostsAccessPoint.S3OutpostsAccessPoint.property.bucketInput"></a>

```typescript
public readonly bucketInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.s3OutpostsAccessPoint.S3OutpostsAccessPoint.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `policyInput`<sup>Optional</sup> <a name="policyInput" id="@cdktn/provider-awscc.s3OutpostsAccessPoint.S3OutpostsAccessPoint.property.policyInput"></a>

```typescript
public readonly policyInput: string;
```

- *Type:* string

---

##### `vpcConfigurationInput`<sup>Optional</sup> <a name="vpcConfigurationInput" id="@cdktn/provider-awscc.s3OutpostsAccessPoint.S3OutpostsAccessPoint.property.vpcConfigurationInput"></a>

```typescript
public readonly vpcConfigurationInput: IResolvable | S3OutpostsAccessPointVpcConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.s3OutpostsAccessPoint.S3OutpostsAccessPointVpcConfiguration">S3OutpostsAccessPointVpcConfiguration</a>

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktn/provider-awscc.s3OutpostsAccessPoint.S3OutpostsAccessPoint.property.bucket"></a>

```typescript
public readonly bucket: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.s3OutpostsAccessPoint.S3OutpostsAccessPoint.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `policy`<sup>Required</sup> <a name="policy" id="@cdktn/provider-awscc.s3OutpostsAccessPoint.S3OutpostsAccessPoint.property.policy"></a>

```typescript
public readonly policy: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsAccessPoint.S3OutpostsAccessPoint.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.s3OutpostsAccessPoint.S3OutpostsAccessPoint.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### S3OutpostsAccessPointConfig <a name="S3OutpostsAccessPointConfig" id="@cdktn/provider-awscc.s3OutpostsAccessPoint.S3OutpostsAccessPointConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.s3OutpostsAccessPoint.S3OutpostsAccessPointConfig.Initializer"></a>

```typescript
import { s3OutpostsAccessPoint } from '@cdktn/provider-awscc'

const s3OutpostsAccessPointConfig: s3OutpostsAccessPoint.S3OutpostsAccessPointConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsAccessPoint.S3OutpostsAccessPointConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsAccessPoint.S3OutpostsAccessPointConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsAccessPoint.S3OutpostsAccessPointConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsAccessPoint.S3OutpostsAccessPointConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsAccessPoint.S3OutpostsAccessPointConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsAccessPoint.S3OutpostsAccessPointConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsAccessPoint.S3OutpostsAccessPointConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsAccessPoint.S3OutpostsAccessPointConfig.property.bucket">bucket</a></code> | <code>string</code> | The Amazon Resource Name (ARN) of the bucket you want to associate this AccessPoint with. |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsAccessPoint.S3OutpostsAccessPointConfig.property.name">name</a></code> | <code>string</code> | A name for the AccessPoint. |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsAccessPoint.S3OutpostsAccessPointConfig.property.vpcConfiguration">vpcConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.s3OutpostsAccessPoint.S3OutpostsAccessPointVpcConfiguration">S3OutpostsAccessPointVpcConfiguration</a></code> | Virtual Private Cloud (VPC) from which requests can be made to the AccessPoint. |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsAccessPoint.S3OutpostsAccessPointConfig.property.policy">policy</a></code> | <code>string</code> | The access point policy associated with this access point. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.s3OutpostsAccessPoint.S3OutpostsAccessPointConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.s3OutpostsAccessPoint.S3OutpostsAccessPointConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.s3OutpostsAccessPoint.S3OutpostsAccessPointConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.s3OutpostsAccessPoint.S3OutpostsAccessPointConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.s3OutpostsAccessPoint.S3OutpostsAccessPointConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.s3OutpostsAccessPoint.S3OutpostsAccessPointConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.s3OutpostsAccessPoint.S3OutpostsAccessPointConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktn/provider-awscc.s3OutpostsAccessPoint.S3OutpostsAccessPointConfig.property.bucket"></a>

```typescript
public readonly bucket: string;
```

- *Type:* string

The Amazon Resource Name (ARN) of the bucket you want to associate this AccessPoint with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/s3outposts_access_point#bucket S3OutpostsAccessPoint#bucket}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.s3OutpostsAccessPoint.S3OutpostsAccessPointConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

A name for the AccessPoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/s3outposts_access_point#name S3OutpostsAccessPoint#name}

---

##### `vpcConfiguration`<sup>Required</sup> <a name="vpcConfiguration" id="@cdktn/provider-awscc.s3OutpostsAccessPoint.S3OutpostsAccessPointConfig.property.vpcConfiguration"></a>

```typescript
public readonly vpcConfiguration: S3OutpostsAccessPointVpcConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.s3OutpostsAccessPoint.S3OutpostsAccessPointVpcConfiguration">S3OutpostsAccessPointVpcConfiguration</a>

Virtual Private Cloud (VPC) from which requests can be made to the AccessPoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/s3outposts_access_point#vpc_configuration S3OutpostsAccessPoint#vpc_configuration}

---

##### `policy`<sup>Optional</sup> <a name="policy" id="@cdktn/provider-awscc.s3OutpostsAccessPoint.S3OutpostsAccessPointConfig.property.policy"></a>

```typescript
public readonly policy: string;
```

- *Type:* string

The access point policy associated with this access point.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/s3outposts_access_point#policy S3OutpostsAccessPoint#policy}

---

### S3OutpostsAccessPointVpcConfiguration <a name="S3OutpostsAccessPointVpcConfiguration" id="@cdktn/provider-awscc.s3OutpostsAccessPoint.S3OutpostsAccessPointVpcConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.s3OutpostsAccessPoint.S3OutpostsAccessPointVpcConfiguration.Initializer"></a>

```typescript
import { s3OutpostsAccessPoint } from '@cdktn/provider-awscc'

const s3OutpostsAccessPointVpcConfiguration: s3OutpostsAccessPoint.S3OutpostsAccessPointVpcConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsAccessPoint.S3OutpostsAccessPointVpcConfiguration.property.vpcId">vpcId</a></code> | <code>string</code> | Virtual Private Cloud (VPC) Id from which AccessPoint will allow requests. |

---

##### `vpcId`<sup>Optional</sup> <a name="vpcId" id="@cdktn/provider-awscc.s3OutpostsAccessPoint.S3OutpostsAccessPointVpcConfiguration.property.vpcId"></a>

```typescript
public readonly vpcId: string;
```

- *Type:* string

Virtual Private Cloud (VPC) Id from which AccessPoint will allow requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/s3outposts_access_point#vpc_id S3OutpostsAccessPoint#vpc_id}

---

## Classes <a name="Classes" id="Classes"></a>

### S3OutpostsAccessPointVpcConfigurationOutputReference <a name="S3OutpostsAccessPointVpcConfigurationOutputReference" id="@cdktn/provider-awscc.s3OutpostsAccessPoint.S3OutpostsAccessPointVpcConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3OutpostsAccessPoint.S3OutpostsAccessPointVpcConfigurationOutputReference.Initializer"></a>

```typescript
import { s3OutpostsAccessPoint } from '@cdktn/provider-awscc'

new s3OutpostsAccessPoint.S3OutpostsAccessPointVpcConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsAccessPoint.S3OutpostsAccessPointVpcConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsAccessPoint.S3OutpostsAccessPointVpcConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.s3OutpostsAccessPoint.S3OutpostsAccessPointVpcConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3OutpostsAccessPoint.S3OutpostsAccessPointVpcConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsAccessPoint.S3OutpostsAccessPointVpcConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsAccessPoint.S3OutpostsAccessPointVpcConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsAccessPoint.S3OutpostsAccessPointVpcConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsAccessPoint.S3OutpostsAccessPointVpcConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsAccessPoint.S3OutpostsAccessPointVpcConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsAccessPoint.S3OutpostsAccessPointVpcConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsAccessPoint.S3OutpostsAccessPointVpcConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsAccessPoint.S3OutpostsAccessPointVpcConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsAccessPoint.S3OutpostsAccessPointVpcConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsAccessPoint.S3OutpostsAccessPointVpcConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsAccessPoint.S3OutpostsAccessPointVpcConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsAccessPoint.S3OutpostsAccessPointVpcConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsAccessPoint.S3OutpostsAccessPointVpcConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsAccessPoint.S3OutpostsAccessPointVpcConfigurationOutputReference.resetVpcId">resetVpcId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.s3OutpostsAccessPoint.S3OutpostsAccessPointVpcConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.s3OutpostsAccessPoint.S3OutpostsAccessPointVpcConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3OutpostsAccessPoint.S3OutpostsAccessPointVpcConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.s3OutpostsAccessPoint.S3OutpostsAccessPointVpcConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3OutpostsAccessPoint.S3OutpostsAccessPointVpcConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.s3OutpostsAccessPoint.S3OutpostsAccessPointVpcConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3OutpostsAccessPoint.S3OutpostsAccessPointVpcConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.s3OutpostsAccessPoint.S3OutpostsAccessPointVpcConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3OutpostsAccessPoint.S3OutpostsAccessPointVpcConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.s3OutpostsAccessPoint.S3OutpostsAccessPointVpcConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3OutpostsAccessPoint.S3OutpostsAccessPointVpcConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.s3OutpostsAccessPoint.S3OutpostsAccessPointVpcConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3OutpostsAccessPoint.S3OutpostsAccessPointVpcConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.s3OutpostsAccessPoint.S3OutpostsAccessPointVpcConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3OutpostsAccessPoint.S3OutpostsAccessPointVpcConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.s3OutpostsAccessPoint.S3OutpostsAccessPointVpcConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3OutpostsAccessPoint.S3OutpostsAccessPointVpcConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.s3OutpostsAccessPoint.S3OutpostsAccessPointVpcConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3OutpostsAccessPoint.S3OutpostsAccessPointVpcConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.s3OutpostsAccessPoint.S3OutpostsAccessPointVpcConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.s3OutpostsAccessPoint.S3OutpostsAccessPointVpcConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.s3OutpostsAccessPoint.S3OutpostsAccessPointVpcConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.s3OutpostsAccessPoint.S3OutpostsAccessPointVpcConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.s3OutpostsAccessPoint.S3OutpostsAccessPointVpcConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetVpcId` <a name="resetVpcId" id="@cdktn/provider-awscc.s3OutpostsAccessPoint.S3OutpostsAccessPointVpcConfigurationOutputReference.resetVpcId"></a>

```typescript
public resetVpcId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsAccessPoint.S3OutpostsAccessPointVpcConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsAccessPoint.S3OutpostsAccessPointVpcConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsAccessPoint.S3OutpostsAccessPointVpcConfigurationOutputReference.property.vpcIdInput">vpcIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsAccessPoint.S3OutpostsAccessPointVpcConfigurationOutputReference.property.vpcId">vpcId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3OutpostsAccessPoint.S3OutpostsAccessPointVpcConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.s3OutpostsAccessPoint.S3OutpostsAccessPointVpcConfiguration">S3OutpostsAccessPointVpcConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.s3OutpostsAccessPoint.S3OutpostsAccessPointVpcConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.s3OutpostsAccessPoint.S3OutpostsAccessPointVpcConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `vpcIdInput`<sup>Optional</sup> <a name="vpcIdInput" id="@cdktn/provider-awscc.s3OutpostsAccessPoint.S3OutpostsAccessPointVpcConfigurationOutputReference.property.vpcIdInput"></a>

```typescript
public readonly vpcIdInput: string;
```

- *Type:* string

---

##### `vpcId`<sup>Required</sup> <a name="vpcId" id="@cdktn/provider-awscc.s3OutpostsAccessPoint.S3OutpostsAccessPointVpcConfigurationOutputReference.property.vpcId"></a>

```typescript
public readonly vpcId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.s3OutpostsAccessPoint.S3OutpostsAccessPointVpcConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | S3OutpostsAccessPointVpcConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.s3OutpostsAccessPoint.S3OutpostsAccessPointVpcConfiguration">S3OutpostsAccessPointVpcConfiguration</a>

---




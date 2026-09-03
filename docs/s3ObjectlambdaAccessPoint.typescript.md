# `s3ObjectlambdaAccessPoint` Submodule <a name="`s3ObjectlambdaAccessPoint` Submodule" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### S3ObjectlambdaAccessPoint <a name="S3ObjectlambdaAccessPoint" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPoint"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/s3objectlambda_access_point awscc_s3objectlambda_access_point}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPoint.Initializer"></a>

```typescript
import { s3ObjectlambdaAccessPoint } from '@cdktn/provider-awscc'

new s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPoint(scope: Construct, id: string, config: S3ObjectlambdaAccessPointConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPoint.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPoint.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPoint.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointConfig">S3ObjectlambdaAccessPointConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPoint.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPoint.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPoint.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointConfig">S3ObjectlambdaAccessPointConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPoint.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPoint.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPoint.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPoint.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPoint.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPoint.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPoint.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPoint.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPoint.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPoint.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPoint.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPoint.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPoint.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPoint.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPoint.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPoint.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPoint.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPoint.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPoint.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPoint.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPoint.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPoint.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPoint.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPoint.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPoint.putObjectLambdaConfiguration">putObjectLambdaConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPoint.resetName">resetName</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPoint.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPoint.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPoint.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPoint.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPoint.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPoint.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPoint.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPoint.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPoint.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPoint.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPoint.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPoint.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPoint.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPoint.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPoint.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPoint.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPoint.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPoint.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPoint.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPoint.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPoint.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPoint.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPoint.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPoint.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPoint.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPoint.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPoint.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPoint.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPoint.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPoint.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPoint.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPoint.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPoint.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPoint.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPoint.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPoint.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPoint.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPoint.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPoint.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPoint.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPoint.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPoint.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPoint.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPoint.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPoint.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putObjectLambdaConfiguration` <a name="putObjectLambdaConfiguration" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPoint.putObjectLambdaConfiguration"></a>

```typescript
public putObjectLambdaConfiguration(value: S3ObjectlambdaAccessPointObjectLambdaConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPoint.putObjectLambdaConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfiguration">S3ObjectlambdaAccessPointObjectLambdaConfiguration</a>

---

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPoint.resetName"></a>

```typescript
public resetName(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPoint.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPoint.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPoint.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPoint.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a S3ObjectlambdaAccessPoint resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPoint.isConstruct"></a>

```typescript
import { s3ObjectlambdaAccessPoint } from '@cdktn/provider-awscc'

s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPoint.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPoint.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPoint.isTerraformElement"></a>

```typescript
import { s3ObjectlambdaAccessPoint } from '@cdktn/provider-awscc'

s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPoint.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPoint.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPoint.isTerraformResource"></a>

```typescript
import { s3ObjectlambdaAccessPoint } from '@cdktn/provider-awscc'

s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPoint.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPoint.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPoint.generateConfigForImport"></a>

```typescript
import { s3ObjectlambdaAccessPoint } from '@cdktn/provider-awscc'

s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPoint.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a S3ObjectlambdaAccessPoint resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPoint.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPoint.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the S3ObjectlambdaAccessPoint to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPoint.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing S3ObjectlambdaAccessPoint that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/s3objectlambda_access_point#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPoint.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the S3ObjectlambdaAccessPoint to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPoint.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPoint.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPoint.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPoint.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPoint.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPoint.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPoint.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPoint.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPoint.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPoint.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPoint.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPoint.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPoint.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPoint.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPoint.property.alias">alias</a></code> | <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointAliasOutputReference">S3ObjectlambdaAccessPointAliasOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPoint.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPoint.property.creationDate">creationDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPoint.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPoint.property.objectLambdaConfiguration">objectLambdaConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationOutputReference">S3ObjectlambdaAccessPointObjectLambdaConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPoint.property.policyStatus">policyStatus</a></code> | <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointPolicyStatusOutputReference">S3ObjectlambdaAccessPointPolicyStatusOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPoint.property.publicAccessBlockConfiguration">publicAccessBlockConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointPublicAccessBlockConfigurationOutputReference">S3ObjectlambdaAccessPointPublicAccessBlockConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPoint.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPoint.property.objectLambdaConfigurationInput">objectLambdaConfigurationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfiguration">S3ObjectlambdaAccessPointObjectLambdaConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPoint.property.name">name</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPoint.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPoint.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPoint.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPoint.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPoint.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPoint.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPoint.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPoint.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPoint.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPoint.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPoint.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPoint.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPoint.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPoint.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `alias`<sup>Required</sup> <a name="alias" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPoint.property.alias"></a>

```typescript
public readonly alias: S3ObjectlambdaAccessPointAliasOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointAliasOutputReference">S3ObjectlambdaAccessPointAliasOutputReference</a>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPoint.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `creationDate`<sup>Required</sup> <a name="creationDate" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPoint.property.creationDate"></a>

```typescript
public readonly creationDate: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPoint.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `objectLambdaConfiguration`<sup>Required</sup> <a name="objectLambdaConfiguration" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPoint.property.objectLambdaConfiguration"></a>

```typescript
public readonly objectLambdaConfiguration: S3ObjectlambdaAccessPointObjectLambdaConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationOutputReference">S3ObjectlambdaAccessPointObjectLambdaConfigurationOutputReference</a>

---

##### `policyStatus`<sup>Required</sup> <a name="policyStatus" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPoint.property.policyStatus"></a>

```typescript
public readonly policyStatus: S3ObjectlambdaAccessPointPolicyStatusOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointPolicyStatusOutputReference">S3ObjectlambdaAccessPointPolicyStatusOutputReference</a>

---

##### `publicAccessBlockConfiguration`<sup>Required</sup> <a name="publicAccessBlockConfiguration" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPoint.property.publicAccessBlockConfiguration"></a>

```typescript
public readonly publicAccessBlockConfiguration: S3ObjectlambdaAccessPointPublicAccessBlockConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointPublicAccessBlockConfigurationOutputReference">S3ObjectlambdaAccessPointPublicAccessBlockConfigurationOutputReference</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPoint.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `objectLambdaConfigurationInput`<sup>Optional</sup> <a name="objectLambdaConfigurationInput" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPoint.property.objectLambdaConfigurationInput"></a>

```typescript
public readonly objectLambdaConfigurationInput: IResolvable | S3ObjectlambdaAccessPointObjectLambdaConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfiguration">S3ObjectlambdaAccessPointObjectLambdaConfiguration</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPoint.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPoint.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPoint.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### S3ObjectlambdaAccessPointAlias <a name="S3ObjectlambdaAccessPointAlias" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointAlias"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointAlias.Initializer"></a>

```typescript
import { s3ObjectlambdaAccessPoint } from '@cdktn/provider-awscc'

const s3ObjectlambdaAccessPointAlias: s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointAlias = { ... }
```


### S3ObjectlambdaAccessPointConfig <a name="S3ObjectlambdaAccessPointConfig" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointConfig.Initializer"></a>

```typescript
import { s3ObjectlambdaAccessPoint } from '@cdktn/provider-awscc'

const s3ObjectlambdaAccessPointConfig: s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointConfig.property.objectLambdaConfiguration">objectLambdaConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfiguration">S3ObjectlambdaAccessPointObjectLambdaConfiguration</a></code> | The Object lambda Access Point Configuration that configures transformations to be applied on the objects on specified S3 Actions. |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointConfig.property.name">name</a></code> | <code>string</code> | The name you want to assign to this Object lambda Access Point. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `objectLambdaConfiguration`<sup>Required</sup> <a name="objectLambdaConfiguration" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointConfig.property.objectLambdaConfiguration"></a>

```typescript
public readonly objectLambdaConfiguration: S3ObjectlambdaAccessPointObjectLambdaConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfiguration">S3ObjectlambdaAccessPointObjectLambdaConfiguration</a>

The Object lambda Access Point Configuration that configures transformations to be applied on the objects on specified S3 Actions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/s3objectlambda_access_point#object_lambda_configuration S3ObjectlambdaAccessPoint#object_lambda_configuration}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name you want to assign to this Object lambda Access Point.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/s3objectlambda_access_point#name S3ObjectlambdaAccessPoint#name}

---

### S3ObjectlambdaAccessPointObjectLambdaConfiguration <a name="S3ObjectlambdaAccessPointObjectLambdaConfiguration" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfiguration.Initializer"></a>

```typescript
import { s3ObjectlambdaAccessPoint } from '@cdktn/provider-awscc'

const s3ObjectlambdaAccessPointObjectLambdaConfiguration: s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfiguration.property.supportingAccessPoint">supportingAccessPoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/s3objectlambda_access_point#supporting_access_point S3ObjectlambdaAccessPoint#supporting_access_point}. |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfiguration.property.transformationConfigurations">transformationConfigurations</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurations">S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurations</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/s3objectlambda_access_point#transformation_configurations S3ObjectlambdaAccessPoint#transformation_configurations}. |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfiguration.property.allowedFeatures">allowedFeatures</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/s3objectlambda_access_point#allowed_features S3ObjectlambdaAccessPoint#allowed_features}. |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfiguration.property.cloudwatchMetricsEnabled">cloudwatchMetricsEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/s3objectlambda_access_point#cloudwatch_metrics_enabled S3ObjectlambdaAccessPoint#cloudwatch_metrics_enabled}. |

---

##### `supportingAccessPoint`<sup>Required</sup> <a name="supportingAccessPoint" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfiguration.property.supportingAccessPoint"></a>

```typescript
public readonly supportingAccessPoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/s3objectlambda_access_point#supporting_access_point S3ObjectlambdaAccessPoint#supporting_access_point}.

---

##### `transformationConfigurations`<sup>Required</sup> <a name="transformationConfigurations" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfiguration.property.transformationConfigurations"></a>

```typescript
public readonly transformationConfigurations: IResolvable | S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurations[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurations">S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurations</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/s3objectlambda_access_point#transformation_configurations S3ObjectlambdaAccessPoint#transformation_configurations}.

---

##### `allowedFeatures`<sup>Optional</sup> <a name="allowedFeatures" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfiguration.property.allowedFeatures"></a>

```typescript
public readonly allowedFeatures: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/s3objectlambda_access_point#allowed_features S3ObjectlambdaAccessPoint#allowed_features}.

---

##### `cloudwatchMetricsEnabled`<sup>Optional</sup> <a name="cloudwatchMetricsEnabled" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfiguration.property.cloudwatchMetricsEnabled"></a>

```typescript
public readonly cloudwatchMetricsEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/s3objectlambda_access_point#cloudwatch_metrics_enabled S3ObjectlambdaAccessPoint#cloudwatch_metrics_enabled}.

---

### S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurations <a name="S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurations" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurations.Initializer"></a>

```typescript
import { s3ObjectlambdaAccessPoint } from '@cdktn/provider-awscc'

const s3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurations: s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurations = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurations.property.actions">actions</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/s3objectlambda_access_point#actions S3ObjectlambdaAccessPoint#actions}. |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurations.property.contentTransformation">contentTransformation</a></code> | <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformation">S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformation</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/s3objectlambda_access_point#content_transformation S3ObjectlambdaAccessPoint#content_transformation}. |

---

##### `actions`<sup>Required</sup> <a name="actions" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurations.property.actions"></a>

```typescript
public readonly actions: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/s3objectlambda_access_point#actions S3ObjectlambdaAccessPoint#actions}.

---

##### `contentTransformation`<sup>Required</sup> <a name="contentTransformation" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurations.property.contentTransformation"></a>

```typescript
public readonly contentTransformation: S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformation;
```

- *Type:* <a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformation">S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformation</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/s3objectlambda_access_point#content_transformation S3ObjectlambdaAccessPoint#content_transformation}.

---

### S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformation <a name="S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformation" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformation"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformation.Initializer"></a>

```typescript
import { s3ObjectlambdaAccessPoint } from '@cdktn/provider-awscc'

const s3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformation: s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformation = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformation.property.awsLambda">awsLambda</a></code> | <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationAwsLambda">S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationAwsLambda</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/s3objectlambda_access_point#aws_lambda S3ObjectlambdaAccessPoint#aws_lambda}. |

---

##### `awsLambda`<sup>Optional</sup> <a name="awsLambda" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformation.property.awsLambda"></a>

```typescript
public readonly awsLambda: S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationAwsLambda;
```

- *Type:* <a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationAwsLambda">S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationAwsLambda</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/s3objectlambda_access_point#aws_lambda S3ObjectlambdaAccessPoint#aws_lambda}.

---

### S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationAwsLambda <a name="S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationAwsLambda" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationAwsLambda"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationAwsLambda.Initializer"></a>

```typescript
import { s3ObjectlambdaAccessPoint } from '@cdktn/provider-awscc'

const s3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationAwsLambda: s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationAwsLambda = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationAwsLambda.property.functionArn">functionArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/s3objectlambda_access_point#function_arn S3ObjectlambdaAccessPoint#function_arn}. |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationAwsLambda.property.functionPayload">functionPayload</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/s3objectlambda_access_point#function_payload S3ObjectlambdaAccessPoint#function_payload}. |

---

##### `functionArn`<sup>Optional</sup> <a name="functionArn" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationAwsLambda.property.functionArn"></a>

```typescript
public readonly functionArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/s3objectlambda_access_point#function_arn S3ObjectlambdaAccessPoint#function_arn}.

---

##### `functionPayload`<sup>Optional</sup> <a name="functionPayload" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationAwsLambda.property.functionPayload"></a>

```typescript
public readonly functionPayload: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/s3objectlambda_access_point#function_payload S3ObjectlambdaAccessPoint#function_payload}.

---

### S3ObjectlambdaAccessPointPolicyStatus <a name="S3ObjectlambdaAccessPointPolicyStatus" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointPolicyStatus"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointPolicyStatus.Initializer"></a>

```typescript
import { s3ObjectlambdaAccessPoint } from '@cdktn/provider-awscc'

const s3ObjectlambdaAccessPointPolicyStatus: s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointPolicyStatus = { ... }
```


### S3ObjectlambdaAccessPointPublicAccessBlockConfiguration <a name="S3ObjectlambdaAccessPointPublicAccessBlockConfiguration" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointPublicAccessBlockConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointPublicAccessBlockConfiguration.Initializer"></a>

```typescript
import { s3ObjectlambdaAccessPoint } from '@cdktn/provider-awscc'

const s3ObjectlambdaAccessPointPublicAccessBlockConfiguration: s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointPublicAccessBlockConfiguration = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### S3ObjectlambdaAccessPointAliasOutputReference <a name="S3ObjectlambdaAccessPointAliasOutputReference" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointAliasOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointAliasOutputReference.Initializer"></a>

```typescript
import { s3ObjectlambdaAccessPoint } from '@cdktn/provider-awscc'

new s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointAliasOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointAliasOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointAliasOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointAliasOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointAliasOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointAliasOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointAliasOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointAliasOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointAliasOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointAliasOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointAliasOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointAliasOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointAliasOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointAliasOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointAliasOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointAliasOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointAliasOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointAliasOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointAliasOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointAliasOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointAliasOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointAliasOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointAliasOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointAliasOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointAliasOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointAliasOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointAliasOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointAliasOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointAliasOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointAliasOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointAliasOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointAliasOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointAliasOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointAliasOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointAliasOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointAliasOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointAliasOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointAliasOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointAliasOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointAliasOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointAliasOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointAliasOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointAliasOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointAliasOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointAliasOutputReference.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointAliasOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointAliasOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointAlias">S3ObjectlambdaAccessPointAlias</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointAliasOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointAliasOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointAliasOutputReference.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointAliasOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointAliasOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: S3ObjectlambdaAccessPointAlias;
```

- *Type:* <a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointAlias">S3ObjectlambdaAccessPointAlias</a>

---


### S3ObjectlambdaAccessPointObjectLambdaConfigurationOutputReference <a name="S3ObjectlambdaAccessPointObjectLambdaConfigurationOutputReference" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationOutputReference.Initializer"></a>

```typescript
import { s3ObjectlambdaAccessPoint } from '@cdktn/provider-awscc'

new s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationOutputReference.putTransformationConfigurations">putTransformationConfigurations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationOutputReference.resetAllowedFeatures">resetAllowedFeatures</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationOutputReference.resetCloudwatchMetricsEnabled">resetCloudwatchMetricsEnabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putTransformationConfigurations` <a name="putTransformationConfigurations" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationOutputReference.putTransformationConfigurations"></a>

```typescript
public putTransformationConfigurations(value: IResolvable | S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurations[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationOutputReference.putTransformationConfigurations.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurations">S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurations</a>[]

---

##### `resetAllowedFeatures` <a name="resetAllowedFeatures" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationOutputReference.resetAllowedFeatures"></a>

```typescript
public resetAllowedFeatures(): void
```

##### `resetCloudwatchMetricsEnabled` <a name="resetCloudwatchMetricsEnabled" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationOutputReference.resetCloudwatchMetricsEnabled"></a>

```typescript
public resetCloudwatchMetricsEnabled(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationOutputReference.property.transformationConfigurations">transformationConfigurations</a></code> | <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsList">S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationOutputReference.property.allowedFeaturesInput">allowedFeaturesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationOutputReference.property.cloudwatchMetricsEnabledInput">cloudwatchMetricsEnabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationOutputReference.property.supportingAccessPointInput">supportingAccessPointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationOutputReference.property.transformationConfigurationsInput">transformationConfigurationsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurations">S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurations</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationOutputReference.property.allowedFeatures">allowedFeatures</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationOutputReference.property.cloudwatchMetricsEnabled">cloudwatchMetricsEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationOutputReference.property.supportingAccessPoint">supportingAccessPoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfiguration">S3ObjectlambdaAccessPointObjectLambdaConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `transformationConfigurations`<sup>Required</sup> <a name="transformationConfigurations" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationOutputReference.property.transformationConfigurations"></a>

```typescript
public readonly transformationConfigurations: S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsList">S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsList</a>

---

##### `allowedFeaturesInput`<sup>Optional</sup> <a name="allowedFeaturesInput" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationOutputReference.property.allowedFeaturesInput"></a>

```typescript
public readonly allowedFeaturesInput: string[];
```

- *Type:* string[]

---

##### `cloudwatchMetricsEnabledInput`<sup>Optional</sup> <a name="cloudwatchMetricsEnabledInput" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationOutputReference.property.cloudwatchMetricsEnabledInput"></a>

```typescript
public readonly cloudwatchMetricsEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `supportingAccessPointInput`<sup>Optional</sup> <a name="supportingAccessPointInput" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationOutputReference.property.supportingAccessPointInput"></a>

```typescript
public readonly supportingAccessPointInput: string;
```

- *Type:* string

---

##### `transformationConfigurationsInput`<sup>Optional</sup> <a name="transformationConfigurationsInput" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationOutputReference.property.transformationConfigurationsInput"></a>

```typescript
public readonly transformationConfigurationsInput: IResolvable | S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurations[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurations">S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurations</a>[]

---

##### `allowedFeatures`<sup>Required</sup> <a name="allowedFeatures" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationOutputReference.property.allowedFeatures"></a>

```typescript
public readonly allowedFeatures: string[];
```

- *Type:* string[]

---

##### `cloudwatchMetricsEnabled`<sup>Required</sup> <a name="cloudwatchMetricsEnabled" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationOutputReference.property.cloudwatchMetricsEnabled"></a>

```typescript
public readonly cloudwatchMetricsEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `supportingAccessPoint`<sup>Required</sup> <a name="supportingAccessPoint" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationOutputReference.property.supportingAccessPoint"></a>

```typescript
public readonly supportingAccessPoint: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | S3ObjectlambdaAccessPointObjectLambdaConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfiguration">S3ObjectlambdaAccessPointObjectLambdaConfiguration</a>

---


### S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationAwsLambdaOutputReference <a name="S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationAwsLambdaOutputReference" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationAwsLambdaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationAwsLambdaOutputReference.Initializer"></a>

```typescript
import { s3ObjectlambdaAccessPoint } from '@cdktn/provider-awscc'

new s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationAwsLambdaOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationAwsLambdaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationAwsLambdaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationAwsLambdaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationAwsLambdaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationAwsLambdaOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationAwsLambdaOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationAwsLambdaOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationAwsLambdaOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationAwsLambdaOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationAwsLambdaOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationAwsLambdaOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationAwsLambdaOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationAwsLambdaOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationAwsLambdaOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationAwsLambdaOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationAwsLambdaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationAwsLambdaOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationAwsLambdaOutputReference.resetFunctionArn">resetFunctionArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationAwsLambdaOutputReference.resetFunctionPayload">resetFunctionPayload</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationAwsLambdaOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationAwsLambdaOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationAwsLambdaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationAwsLambdaOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationAwsLambdaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationAwsLambdaOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationAwsLambdaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationAwsLambdaOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationAwsLambdaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationAwsLambdaOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationAwsLambdaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationAwsLambdaOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationAwsLambdaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationAwsLambdaOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationAwsLambdaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationAwsLambdaOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationAwsLambdaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationAwsLambdaOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationAwsLambdaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationAwsLambdaOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationAwsLambdaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationAwsLambdaOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationAwsLambdaOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationAwsLambdaOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetFunctionArn` <a name="resetFunctionArn" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationAwsLambdaOutputReference.resetFunctionArn"></a>

```typescript
public resetFunctionArn(): void
```

##### `resetFunctionPayload` <a name="resetFunctionPayload" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationAwsLambdaOutputReference.resetFunctionPayload"></a>

```typescript
public resetFunctionPayload(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationAwsLambdaOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationAwsLambdaOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationAwsLambdaOutputReference.property.functionArnInput">functionArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationAwsLambdaOutputReference.property.functionPayloadInput">functionPayloadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationAwsLambdaOutputReference.property.functionArn">functionArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationAwsLambdaOutputReference.property.functionPayload">functionPayload</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationAwsLambdaOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationAwsLambda">S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationAwsLambda</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationAwsLambdaOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationAwsLambdaOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `functionArnInput`<sup>Optional</sup> <a name="functionArnInput" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationAwsLambdaOutputReference.property.functionArnInput"></a>

```typescript
public readonly functionArnInput: string;
```

- *Type:* string

---

##### `functionPayloadInput`<sup>Optional</sup> <a name="functionPayloadInput" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationAwsLambdaOutputReference.property.functionPayloadInput"></a>

```typescript
public readonly functionPayloadInput: string;
```

- *Type:* string

---

##### `functionArn`<sup>Required</sup> <a name="functionArn" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationAwsLambdaOutputReference.property.functionArn"></a>

```typescript
public readonly functionArn: string;
```

- *Type:* string

---

##### `functionPayload`<sup>Required</sup> <a name="functionPayload" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationAwsLambdaOutputReference.property.functionPayload"></a>

```typescript
public readonly functionPayload: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationAwsLambdaOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationAwsLambda;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationAwsLambda">S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationAwsLambda</a>

---


### S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationOutputReference <a name="S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationOutputReference" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationOutputReference.Initializer"></a>

```typescript
import { s3ObjectlambdaAccessPoint } from '@cdktn/provider-awscc'

new s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationOutputReference.putAwsLambda">putAwsLambda</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationOutputReference.resetAwsLambda">resetAwsLambda</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAwsLambda` <a name="putAwsLambda" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationOutputReference.putAwsLambda"></a>

```typescript
public putAwsLambda(value: S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationAwsLambda): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationOutputReference.putAwsLambda.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationAwsLambda">S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationAwsLambda</a>

---

##### `resetAwsLambda` <a name="resetAwsLambda" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationOutputReference.resetAwsLambda"></a>

```typescript
public resetAwsLambda(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationOutputReference.property.awsLambda">awsLambda</a></code> | <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationAwsLambdaOutputReference">S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationAwsLambdaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationOutputReference.property.awsLambdaInput">awsLambdaInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationAwsLambda">S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationAwsLambda</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformation">S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformation</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `awsLambda`<sup>Required</sup> <a name="awsLambda" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationOutputReference.property.awsLambda"></a>

```typescript
public readonly awsLambda: S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationAwsLambdaOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationAwsLambdaOutputReference">S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationAwsLambdaOutputReference</a>

---

##### `awsLambdaInput`<sup>Optional</sup> <a name="awsLambdaInput" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationOutputReference.property.awsLambdaInput"></a>

```typescript
public readonly awsLambdaInput: IResolvable | S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationAwsLambda;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationAwsLambda">S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationAwsLambda</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformation;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformation">S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformation</a>

---


### S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsList <a name="S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsList" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsList.Initializer"></a>

```typescript
import { s3ObjectlambdaAccessPoint } from '@cdktn/provider-awscc'

new s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsList.get"></a>

```typescript
public get(index: number): S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurations">S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurations</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurations[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurations">S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurations</a>[]

---


### S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsOutputReference <a name="S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsOutputReference" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsOutputReference.Initializer"></a>

```typescript
import { s3ObjectlambdaAccessPoint } from '@cdktn/provider-awscc'

new s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsOutputReference.putContentTransformation">putContentTransformation</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putContentTransformation` <a name="putContentTransformation" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsOutputReference.putContentTransformation"></a>

```typescript
public putContentTransformation(value: S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformation): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsOutputReference.putContentTransformation.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformation">S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformation</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsOutputReference.property.contentTransformation">contentTransformation</a></code> | <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationOutputReference">S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsOutputReference.property.actionsInput">actionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsOutputReference.property.contentTransformationInput">contentTransformationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformation">S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsOutputReference.property.actions">actions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurations">S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurations</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `contentTransformation`<sup>Required</sup> <a name="contentTransformation" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsOutputReference.property.contentTransformation"></a>

```typescript
public readonly contentTransformation: S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationOutputReference">S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformationOutputReference</a>

---

##### `actionsInput`<sup>Optional</sup> <a name="actionsInput" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsOutputReference.property.actionsInput"></a>

```typescript
public readonly actionsInput: string[];
```

- *Type:* string[]

---

##### `contentTransformationInput`<sup>Optional</sup> <a name="contentTransformationInput" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsOutputReference.property.contentTransformationInput"></a>

```typescript
public readonly contentTransformationInput: IResolvable | S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformation;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformation">S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsContentTransformation</a>

---

##### `actions`<sup>Required</sup> <a name="actions" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsOutputReference.property.actions"></a>

```typescript
public readonly actions: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurationsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurations;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurations">S3ObjectlambdaAccessPointObjectLambdaConfigurationTransformationConfigurations</a>

---


### S3ObjectlambdaAccessPointPolicyStatusOutputReference <a name="S3ObjectlambdaAccessPointPolicyStatusOutputReference" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointPolicyStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointPolicyStatusOutputReference.Initializer"></a>

```typescript
import { s3ObjectlambdaAccessPoint } from '@cdktn/provider-awscc'

new s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointPolicyStatusOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointPolicyStatusOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointPolicyStatusOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointPolicyStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointPolicyStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointPolicyStatusOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointPolicyStatusOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointPolicyStatusOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointPolicyStatusOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointPolicyStatusOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointPolicyStatusOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointPolicyStatusOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointPolicyStatusOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointPolicyStatusOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointPolicyStatusOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointPolicyStatusOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointPolicyStatusOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointPolicyStatusOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointPolicyStatusOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointPolicyStatusOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointPolicyStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointPolicyStatusOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointPolicyStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointPolicyStatusOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointPolicyStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointPolicyStatusOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointPolicyStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointPolicyStatusOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointPolicyStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointPolicyStatusOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointPolicyStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointPolicyStatusOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointPolicyStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointPolicyStatusOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointPolicyStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointPolicyStatusOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointPolicyStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointPolicyStatusOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointPolicyStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointPolicyStatusOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointPolicyStatusOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointPolicyStatusOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointPolicyStatusOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointPolicyStatusOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointPolicyStatusOutputReference.property.isPublic">isPublic</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointPolicyStatusOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointPolicyStatus">S3ObjectlambdaAccessPointPolicyStatus</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointPolicyStatusOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointPolicyStatusOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `isPublic`<sup>Required</sup> <a name="isPublic" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointPolicyStatusOutputReference.property.isPublic"></a>

```typescript
public readonly isPublic: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointPolicyStatusOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: S3ObjectlambdaAccessPointPolicyStatus;
```

- *Type:* <a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointPolicyStatus">S3ObjectlambdaAccessPointPolicyStatus</a>

---


### S3ObjectlambdaAccessPointPublicAccessBlockConfigurationOutputReference <a name="S3ObjectlambdaAccessPointPublicAccessBlockConfigurationOutputReference" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointPublicAccessBlockConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointPublicAccessBlockConfigurationOutputReference.Initializer"></a>

```typescript
import { s3ObjectlambdaAccessPoint } from '@cdktn/provider-awscc'

new s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointPublicAccessBlockConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointPublicAccessBlockConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointPublicAccessBlockConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointPublicAccessBlockConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointPublicAccessBlockConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointPublicAccessBlockConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointPublicAccessBlockConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointPublicAccessBlockConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointPublicAccessBlockConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointPublicAccessBlockConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointPublicAccessBlockConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointPublicAccessBlockConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointPublicAccessBlockConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointPublicAccessBlockConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointPublicAccessBlockConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointPublicAccessBlockConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointPublicAccessBlockConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointPublicAccessBlockConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointPublicAccessBlockConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointPublicAccessBlockConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointPublicAccessBlockConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointPublicAccessBlockConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointPublicAccessBlockConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointPublicAccessBlockConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointPublicAccessBlockConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointPublicAccessBlockConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointPublicAccessBlockConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointPublicAccessBlockConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointPublicAccessBlockConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointPublicAccessBlockConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointPublicAccessBlockConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointPublicAccessBlockConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointPublicAccessBlockConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointPublicAccessBlockConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointPublicAccessBlockConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointPublicAccessBlockConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointPublicAccessBlockConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointPublicAccessBlockConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointPublicAccessBlockConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointPublicAccessBlockConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointPublicAccessBlockConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointPublicAccessBlockConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointPublicAccessBlockConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointPublicAccessBlockConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointPublicAccessBlockConfigurationOutputReference.property.blockPublicAcls">blockPublicAcls</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointPublicAccessBlockConfigurationOutputReference.property.blockPublicPolicy">blockPublicPolicy</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointPublicAccessBlockConfigurationOutputReference.property.ignorePublicAcls">ignorePublicAcls</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointPublicAccessBlockConfigurationOutputReference.property.restrictPublicBuckets">restrictPublicBuckets</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointPublicAccessBlockConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointPublicAccessBlockConfiguration">S3ObjectlambdaAccessPointPublicAccessBlockConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointPublicAccessBlockConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointPublicAccessBlockConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `blockPublicAcls`<sup>Required</sup> <a name="blockPublicAcls" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointPublicAccessBlockConfigurationOutputReference.property.blockPublicAcls"></a>

```typescript
public readonly blockPublicAcls: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `blockPublicPolicy`<sup>Required</sup> <a name="blockPublicPolicy" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointPublicAccessBlockConfigurationOutputReference.property.blockPublicPolicy"></a>

```typescript
public readonly blockPublicPolicy: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `ignorePublicAcls`<sup>Required</sup> <a name="ignorePublicAcls" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointPublicAccessBlockConfigurationOutputReference.property.ignorePublicAcls"></a>

```typescript
public readonly ignorePublicAcls: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `restrictPublicBuckets`<sup>Required</sup> <a name="restrictPublicBuckets" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointPublicAccessBlockConfigurationOutputReference.property.restrictPublicBuckets"></a>

```typescript
public readonly restrictPublicBuckets: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointPublicAccessBlockConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: S3ObjectlambdaAccessPointPublicAccessBlockConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.s3ObjectlambdaAccessPoint.S3ObjectlambdaAccessPointPublicAccessBlockConfiguration">S3ObjectlambdaAccessPointPublicAccessBlockConfiguration</a>

---




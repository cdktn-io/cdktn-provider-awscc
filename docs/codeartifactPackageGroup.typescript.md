# `codeartifactPackageGroup` Submodule <a name="`codeartifactPackageGroup` Submodule" id="@cdktn/provider-awscc.codeartifactPackageGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CodeartifactPackageGroup <a name="CodeartifactPackageGroup" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/codeartifact_package_group awscc_codeartifact_package_group}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.Initializer"></a>

```typescript
import { codeartifactPackageGroup } from '@cdktn/provider-awscc'

new codeartifactPackageGroup.CodeartifactPackageGroup(scope: Construct, id: string, config: CodeartifactPackageGroupConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupConfig">CodeartifactPackageGroupConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupConfig">CodeartifactPackageGroupConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.putOriginConfiguration">putOriginConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.resetContactInfo">resetContactInfo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.resetDomainOwner">resetDomainOwner</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.resetOriginConfiguration">resetOriginConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putOriginConfiguration` <a name="putOriginConfiguration" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.putOriginConfiguration"></a>

```typescript
public putOriginConfiguration(value: CodeartifactPackageGroupOriginConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.putOriginConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfiguration">CodeartifactPackageGroupOriginConfiguration</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.putTags"></a>

```typescript
public putTags(value: IResolvable | CodeartifactPackageGroupTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupTags">CodeartifactPackageGroupTags</a>[]

---

##### `resetContactInfo` <a name="resetContactInfo" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.resetContactInfo"></a>

```typescript
public resetContactInfo(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetDomainOwner` <a name="resetDomainOwner" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.resetDomainOwner"></a>

```typescript
public resetDomainOwner(): void
```

##### `resetOriginConfiguration` <a name="resetOriginConfiguration" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.resetOriginConfiguration"></a>

```typescript
public resetOriginConfiguration(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a CodeartifactPackageGroup resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.isConstruct"></a>

```typescript
import { codeartifactPackageGroup } from '@cdktn/provider-awscc'

codeartifactPackageGroup.CodeartifactPackageGroup.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.isTerraformElement"></a>

```typescript
import { codeartifactPackageGroup } from '@cdktn/provider-awscc'

codeartifactPackageGroup.CodeartifactPackageGroup.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.isTerraformResource"></a>

```typescript
import { codeartifactPackageGroup } from '@cdktn/provider-awscc'

codeartifactPackageGroup.CodeartifactPackageGroup.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.generateConfigForImport"></a>

```typescript
import { codeartifactPackageGroup } from '@cdktn/provider-awscc'

codeartifactPackageGroup.CodeartifactPackageGroup.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a CodeartifactPackageGroup resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the CodeartifactPackageGroup to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing CodeartifactPackageGroup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/codeartifact_package_group#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the CodeartifactPackageGroup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.property.originConfiguration">originConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationOutputReference">CodeartifactPackageGroupOriginConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupTagsList">CodeartifactPackageGroupTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.property.contactInfoInput">contactInfoInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.property.domainNameInput">domainNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.property.domainOwnerInput">domainOwnerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.property.originConfigurationInput">originConfigurationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfiguration">CodeartifactPackageGroupOriginConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.property.patternInput">patternInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupTags">CodeartifactPackageGroupTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.property.contactInfo">contactInfo</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.property.domainName">domainName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.property.domainOwner">domainOwner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.property.pattern">pattern</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `originConfiguration`<sup>Required</sup> <a name="originConfiguration" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.property.originConfiguration"></a>

```typescript
public readonly originConfiguration: CodeartifactPackageGroupOriginConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationOutputReference">CodeartifactPackageGroupOriginConfigurationOutputReference</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.property.tags"></a>

```typescript
public readonly tags: CodeartifactPackageGroupTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupTagsList">CodeartifactPackageGroupTagsList</a>

---

##### `contactInfoInput`<sup>Optional</sup> <a name="contactInfoInput" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.property.contactInfoInput"></a>

```typescript
public readonly contactInfoInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `domainNameInput`<sup>Optional</sup> <a name="domainNameInput" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.property.domainNameInput"></a>

```typescript
public readonly domainNameInput: string;
```

- *Type:* string

---

##### `domainOwnerInput`<sup>Optional</sup> <a name="domainOwnerInput" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.property.domainOwnerInput"></a>

```typescript
public readonly domainOwnerInput: string;
```

- *Type:* string

---

##### `originConfigurationInput`<sup>Optional</sup> <a name="originConfigurationInput" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.property.originConfigurationInput"></a>

```typescript
public readonly originConfigurationInput: IResolvable | CodeartifactPackageGroupOriginConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfiguration">CodeartifactPackageGroupOriginConfiguration</a>

---

##### `patternInput`<sup>Optional</sup> <a name="patternInput" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.property.patternInput"></a>

```typescript
public readonly patternInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | CodeartifactPackageGroupTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupTags">CodeartifactPackageGroupTags</a>[]

---

##### `contactInfo`<sup>Required</sup> <a name="contactInfo" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.property.contactInfo"></a>

```typescript
public readonly contactInfo: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `domainName`<sup>Required</sup> <a name="domainName" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.property.domainName"></a>

```typescript
public readonly domainName: string;
```

- *Type:* string

---

##### `domainOwner`<sup>Required</sup> <a name="domainOwner" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.property.domainOwner"></a>

```typescript
public readonly domainOwner: string;
```

- *Type:* string

---

##### `pattern`<sup>Required</sup> <a name="pattern" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.property.pattern"></a>

```typescript
public readonly pattern: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroup.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CodeartifactPackageGroupConfig <a name="CodeartifactPackageGroupConfig" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupConfig.Initializer"></a>

```typescript
import { codeartifactPackageGroup } from '@cdktn/provider-awscc'

const codeartifactPackageGroupConfig: codeartifactPackageGroup.CodeartifactPackageGroupConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupConfig.property.domainName">domainName</a></code> | <code>string</code> | The name of the domain that contains the package group. |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupConfig.property.pattern">pattern</a></code> | <code>string</code> | The package group pattern that is used to gather packages. |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupConfig.property.contactInfo">contactInfo</a></code> | <code>string</code> | The contact info of the package group. |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupConfig.property.description">description</a></code> | <code>string</code> | The text description of the package group. |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupConfig.property.domainOwner">domainOwner</a></code> | <code>string</code> | The 12-digit account ID of the AWS account that owns the domain. |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupConfig.property.originConfiguration">originConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfiguration">CodeartifactPackageGroupOriginConfiguration</a></code> | The package origin configuration of the package group. |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupTags">CodeartifactPackageGroupTags</a>[]</code> | An array of key-value pairs to apply to the package group. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `domainName`<sup>Required</sup> <a name="domainName" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupConfig.property.domainName"></a>

```typescript
public readonly domainName: string;
```

- *Type:* string

The name of the domain that contains the package group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/codeartifact_package_group#domain_name CodeartifactPackageGroup#domain_name}

---

##### `pattern`<sup>Required</sup> <a name="pattern" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupConfig.property.pattern"></a>

```typescript
public readonly pattern: string;
```

- *Type:* string

The package group pattern that is used to gather packages.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/codeartifact_package_group#pattern CodeartifactPackageGroup#pattern}

---

##### `contactInfo`<sup>Optional</sup> <a name="contactInfo" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupConfig.property.contactInfo"></a>

```typescript
public readonly contactInfo: string;
```

- *Type:* string

The contact info of the package group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/codeartifact_package_group#contact_info CodeartifactPackageGroup#contact_info}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

The text description of the package group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/codeartifact_package_group#description CodeartifactPackageGroup#description}

---

##### `domainOwner`<sup>Optional</sup> <a name="domainOwner" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupConfig.property.domainOwner"></a>

```typescript
public readonly domainOwner: string;
```

- *Type:* string

The 12-digit account ID of the AWS account that owns the domain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/codeartifact_package_group#domain_owner CodeartifactPackageGroup#domain_owner}

---

##### `originConfiguration`<sup>Optional</sup> <a name="originConfiguration" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupConfig.property.originConfiguration"></a>

```typescript
public readonly originConfiguration: CodeartifactPackageGroupOriginConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfiguration">CodeartifactPackageGroupOriginConfiguration</a>

The package origin configuration of the package group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/codeartifact_package_group#origin_configuration CodeartifactPackageGroup#origin_configuration}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | CodeartifactPackageGroupTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupTags">CodeartifactPackageGroupTags</a>[]

An array of key-value pairs to apply to the package group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/codeartifact_package_group#tags CodeartifactPackageGroup#tags}

---

### CodeartifactPackageGroupOriginConfiguration <a name="CodeartifactPackageGroupOriginConfiguration" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfiguration.Initializer"></a>

```typescript
import { codeartifactPackageGroup } from '@cdktn/provider-awscc'

const codeartifactPackageGroupOriginConfiguration: codeartifactPackageGroup.CodeartifactPackageGroupOriginConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfiguration.property.restrictions">restrictions</a></code> | <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictions">CodeartifactPackageGroupOriginConfigurationRestrictions</a></code> | The origin configuration that is applied to the package group. |

---

##### `restrictions`<sup>Optional</sup> <a name="restrictions" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfiguration.property.restrictions"></a>

```typescript
public readonly restrictions: CodeartifactPackageGroupOriginConfigurationRestrictions;
```

- *Type:* <a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictions">CodeartifactPackageGroupOriginConfigurationRestrictions</a>

The origin configuration that is applied to the package group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/codeartifact_package_group#restrictions CodeartifactPackageGroup#restrictions}

---

### CodeartifactPackageGroupOriginConfigurationRestrictions <a name="CodeartifactPackageGroupOriginConfigurationRestrictions" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictions.Initializer"></a>

```typescript
import { codeartifactPackageGroup } from '@cdktn/provider-awscc'

const codeartifactPackageGroupOriginConfigurationRestrictions: codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictions.property.externalUpstream">externalUpstream</a></code> | <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstream">CodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstream</a></code> | The external upstream restriction determines if new package versions can be ingested or retained from external connections. |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictions.property.internalUpstream">internalUpstream</a></code> | <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstream">CodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstream</a></code> | The internal upstream restriction determines if new package versions can be ingested or retained from upstream repositories. |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictions.property.publish">publish</a></code> | <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsPublish">CodeartifactPackageGroupOriginConfigurationRestrictionsPublish</a></code> | The publish restriction determines if new package versions can be published. |

---

##### `externalUpstream`<sup>Optional</sup> <a name="externalUpstream" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictions.property.externalUpstream"></a>

```typescript
public readonly externalUpstream: CodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstream;
```

- *Type:* <a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstream">CodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstream</a>

The external upstream restriction determines if new package versions can be ingested or retained from external connections.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/codeartifact_package_group#external_upstream CodeartifactPackageGroup#external_upstream}

---

##### `internalUpstream`<sup>Optional</sup> <a name="internalUpstream" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictions.property.internalUpstream"></a>

```typescript
public readonly internalUpstream: CodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstream;
```

- *Type:* <a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstream">CodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstream</a>

The internal upstream restriction determines if new package versions can be ingested or retained from upstream repositories.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/codeartifact_package_group#internal_upstream CodeartifactPackageGroup#internal_upstream}

---

##### `publish`<sup>Optional</sup> <a name="publish" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictions.property.publish"></a>

```typescript
public readonly publish: CodeartifactPackageGroupOriginConfigurationRestrictionsPublish;
```

- *Type:* <a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsPublish">CodeartifactPackageGroupOriginConfigurationRestrictionsPublish</a>

The publish restriction determines if new package versions can be published.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/codeartifact_package_group#publish CodeartifactPackageGroup#publish}

---

### CodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstream <a name="CodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstream" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstream"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstream.Initializer"></a>

```typescript
import { codeartifactPackageGroup } from '@cdktn/provider-awscc'

const codeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstream: codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstream = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstream.property.repositories">repositories</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/codeartifact_package_group#repositories CodeartifactPackageGroup#repositories}. |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstream.property.restrictionMode">restrictionMode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/codeartifact_package_group#restriction_mode CodeartifactPackageGroup#restriction_mode}. |

---

##### `repositories`<sup>Optional</sup> <a name="repositories" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstream.property.repositories"></a>

```typescript
public readonly repositories: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/codeartifact_package_group#repositories CodeartifactPackageGroup#repositories}.

---

##### `restrictionMode`<sup>Optional</sup> <a name="restrictionMode" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstream.property.restrictionMode"></a>

```typescript
public readonly restrictionMode: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/codeartifact_package_group#restriction_mode CodeartifactPackageGroup#restriction_mode}.

---

### CodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstream <a name="CodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstream" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstream"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstream.Initializer"></a>

```typescript
import { codeartifactPackageGroup } from '@cdktn/provider-awscc'

const codeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstream: codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstream = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstream.property.repositories">repositories</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/codeartifact_package_group#repositories CodeartifactPackageGroup#repositories}. |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstream.property.restrictionMode">restrictionMode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/codeartifact_package_group#restriction_mode CodeartifactPackageGroup#restriction_mode}. |

---

##### `repositories`<sup>Optional</sup> <a name="repositories" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstream.property.repositories"></a>

```typescript
public readonly repositories: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/codeartifact_package_group#repositories CodeartifactPackageGroup#repositories}.

---

##### `restrictionMode`<sup>Optional</sup> <a name="restrictionMode" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstream.property.restrictionMode"></a>

```typescript
public readonly restrictionMode: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/codeartifact_package_group#restriction_mode CodeartifactPackageGroup#restriction_mode}.

---

### CodeartifactPackageGroupOriginConfigurationRestrictionsPublish <a name="CodeartifactPackageGroupOriginConfigurationRestrictionsPublish" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsPublish"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsPublish.Initializer"></a>

```typescript
import { codeartifactPackageGroup } from '@cdktn/provider-awscc'

const codeartifactPackageGroupOriginConfigurationRestrictionsPublish: codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsPublish = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsPublish.property.repositories">repositories</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/codeartifact_package_group#repositories CodeartifactPackageGroup#repositories}. |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsPublish.property.restrictionMode">restrictionMode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/codeartifact_package_group#restriction_mode CodeartifactPackageGroup#restriction_mode}. |

---

##### `repositories`<sup>Optional</sup> <a name="repositories" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsPublish.property.repositories"></a>

```typescript
public readonly repositories: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/codeartifact_package_group#repositories CodeartifactPackageGroup#repositories}.

---

##### `restrictionMode`<sup>Optional</sup> <a name="restrictionMode" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsPublish.property.restrictionMode"></a>

```typescript
public readonly restrictionMode: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/codeartifact_package_group#restriction_mode CodeartifactPackageGroup#restriction_mode}.

---

### CodeartifactPackageGroupTags <a name="CodeartifactPackageGroupTags" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupTags.Initializer"></a>

```typescript
import { codeartifactPackageGroup } from '@cdktn/provider-awscc'

const codeartifactPackageGroupTags: codeartifactPackageGroup.CodeartifactPackageGroupTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupTags.property.key">key</a></code> | <code>string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupTags.property.value">value</a></code> | <code>string</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -. 

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/codeartifact_package_group#key CodeartifactPackageGroup#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

The value for the tag.

You can specify a value that is 1 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -. 

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/codeartifact_package_group#value CodeartifactPackageGroup#value}

---

## Classes <a name="Classes" id="Classes"></a>

### CodeartifactPackageGroupOriginConfigurationOutputReference <a name="CodeartifactPackageGroupOriginConfigurationOutputReference" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationOutputReference.Initializer"></a>

```typescript
import { codeartifactPackageGroup } from '@cdktn/provider-awscc'

new codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationOutputReference.putRestrictions">putRestrictions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationOutputReference.resetRestrictions">resetRestrictions</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putRestrictions` <a name="putRestrictions" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationOutputReference.putRestrictions"></a>

```typescript
public putRestrictions(value: CodeartifactPackageGroupOriginConfigurationRestrictions): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationOutputReference.putRestrictions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictions">CodeartifactPackageGroupOriginConfigurationRestrictions</a>

---

##### `resetRestrictions` <a name="resetRestrictions" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationOutputReference.resetRestrictions"></a>

```typescript
public resetRestrictions(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationOutputReference.property.restrictions">restrictions</a></code> | <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsOutputReference">CodeartifactPackageGroupOriginConfigurationRestrictionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationOutputReference.property.restrictionsInput">restrictionsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictions">CodeartifactPackageGroupOriginConfigurationRestrictions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfiguration">CodeartifactPackageGroupOriginConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `restrictions`<sup>Required</sup> <a name="restrictions" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationOutputReference.property.restrictions"></a>

```typescript
public readonly restrictions: CodeartifactPackageGroupOriginConfigurationRestrictionsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsOutputReference">CodeartifactPackageGroupOriginConfigurationRestrictionsOutputReference</a>

---

##### `restrictionsInput`<sup>Optional</sup> <a name="restrictionsInput" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationOutputReference.property.restrictionsInput"></a>

```typescript
public readonly restrictionsInput: IResolvable | CodeartifactPackageGroupOriginConfigurationRestrictions;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictions">CodeartifactPackageGroupOriginConfigurationRestrictions</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CodeartifactPackageGroupOriginConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfiguration">CodeartifactPackageGroupOriginConfiguration</a>

---


### CodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstreamOutputReference <a name="CodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstreamOutputReference" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstreamOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstreamOutputReference.Initializer"></a>

```typescript
import { codeartifactPackageGroup } from '@cdktn/provider-awscc'

new codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstreamOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstreamOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstreamOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstreamOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstreamOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstreamOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstreamOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstreamOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstreamOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstreamOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstreamOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstreamOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstreamOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstreamOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstreamOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstreamOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstreamOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstreamOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstreamOutputReference.resetRepositories">resetRepositories</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstreamOutputReference.resetRestrictionMode">resetRestrictionMode</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstreamOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstreamOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstreamOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstreamOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstreamOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstreamOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstreamOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstreamOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstreamOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstreamOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstreamOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstreamOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstreamOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstreamOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstreamOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstreamOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstreamOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstreamOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstreamOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstreamOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstreamOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstreamOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstreamOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstreamOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRepositories` <a name="resetRepositories" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstreamOutputReference.resetRepositories"></a>

```typescript
public resetRepositories(): void
```

##### `resetRestrictionMode` <a name="resetRestrictionMode" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstreamOutputReference.resetRestrictionMode"></a>

```typescript
public resetRestrictionMode(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstreamOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstreamOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstreamOutputReference.property.repositoriesInput">repositoriesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstreamOutputReference.property.restrictionModeInput">restrictionModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstreamOutputReference.property.repositories">repositories</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstreamOutputReference.property.restrictionMode">restrictionMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstreamOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstream">CodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstream</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstreamOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstreamOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `repositoriesInput`<sup>Optional</sup> <a name="repositoriesInput" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstreamOutputReference.property.repositoriesInput"></a>

```typescript
public readonly repositoriesInput: string[];
```

- *Type:* string[]

---

##### `restrictionModeInput`<sup>Optional</sup> <a name="restrictionModeInput" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstreamOutputReference.property.restrictionModeInput"></a>

```typescript
public readonly restrictionModeInput: string;
```

- *Type:* string

---

##### `repositories`<sup>Required</sup> <a name="repositories" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstreamOutputReference.property.repositories"></a>

```typescript
public readonly repositories: string[];
```

- *Type:* string[]

---

##### `restrictionMode`<sup>Required</sup> <a name="restrictionMode" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstreamOutputReference.property.restrictionMode"></a>

```typescript
public readonly restrictionMode: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstreamOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstream;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstream">CodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstream</a>

---


### CodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstreamOutputReference <a name="CodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstreamOutputReference" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstreamOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstreamOutputReference.Initializer"></a>

```typescript
import { codeartifactPackageGroup } from '@cdktn/provider-awscc'

new codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstreamOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstreamOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstreamOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstreamOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstreamOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstreamOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstreamOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstreamOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstreamOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstreamOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstreamOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstreamOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstreamOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstreamOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstreamOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstreamOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstreamOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstreamOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstreamOutputReference.resetRepositories">resetRepositories</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstreamOutputReference.resetRestrictionMode">resetRestrictionMode</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstreamOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstreamOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstreamOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstreamOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstreamOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstreamOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstreamOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstreamOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstreamOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstreamOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstreamOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstreamOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstreamOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstreamOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstreamOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstreamOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstreamOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstreamOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstreamOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstreamOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstreamOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstreamOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstreamOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstreamOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRepositories` <a name="resetRepositories" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstreamOutputReference.resetRepositories"></a>

```typescript
public resetRepositories(): void
```

##### `resetRestrictionMode` <a name="resetRestrictionMode" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstreamOutputReference.resetRestrictionMode"></a>

```typescript
public resetRestrictionMode(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstreamOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstreamOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstreamOutputReference.property.repositoriesInput">repositoriesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstreamOutputReference.property.restrictionModeInput">restrictionModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstreamOutputReference.property.repositories">repositories</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstreamOutputReference.property.restrictionMode">restrictionMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstreamOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstream">CodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstream</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstreamOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstreamOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `repositoriesInput`<sup>Optional</sup> <a name="repositoriesInput" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstreamOutputReference.property.repositoriesInput"></a>

```typescript
public readonly repositoriesInput: string[];
```

- *Type:* string[]

---

##### `restrictionModeInput`<sup>Optional</sup> <a name="restrictionModeInput" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstreamOutputReference.property.restrictionModeInput"></a>

```typescript
public readonly restrictionModeInput: string;
```

- *Type:* string

---

##### `repositories`<sup>Required</sup> <a name="repositories" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstreamOutputReference.property.repositories"></a>

```typescript
public readonly repositories: string[];
```

- *Type:* string[]

---

##### `restrictionMode`<sup>Required</sup> <a name="restrictionMode" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstreamOutputReference.property.restrictionMode"></a>

```typescript
public readonly restrictionMode: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstreamOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstream;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstream">CodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstream</a>

---


### CodeartifactPackageGroupOriginConfigurationRestrictionsOutputReference <a name="CodeartifactPackageGroupOriginConfigurationRestrictionsOutputReference" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsOutputReference.Initializer"></a>

```typescript
import { codeartifactPackageGroup } from '@cdktn/provider-awscc'

new codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsOutputReference.putExternalUpstream">putExternalUpstream</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsOutputReference.putInternalUpstream">putInternalUpstream</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsOutputReference.putPublish">putPublish</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsOutputReference.resetExternalUpstream">resetExternalUpstream</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsOutputReference.resetInternalUpstream">resetInternalUpstream</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsOutputReference.resetPublish">resetPublish</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putExternalUpstream` <a name="putExternalUpstream" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsOutputReference.putExternalUpstream"></a>

```typescript
public putExternalUpstream(value: CodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstream): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsOutputReference.putExternalUpstream.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstream">CodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstream</a>

---

##### `putInternalUpstream` <a name="putInternalUpstream" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsOutputReference.putInternalUpstream"></a>

```typescript
public putInternalUpstream(value: CodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstream): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsOutputReference.putInternalUpstream.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstream">CodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstream</a>

---

##### `putPublish` <a name="putPublish" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsOutputReference.putPublish"></a>

```typescript
public putPublish(value: CodeartifactPackageGroupOriginConfigurationRestrictionsPublish): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsOutputReference.putPublish.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsPublish">CodeartifactPackageGroupOriginConfigurationRestrictionsPublish</a>

---

##### `resetExternalUpstream` <a name="resetExternalUpstream" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsOutputReference.resetExternalUpstream"></a>

```typescript
public resetExternalUpstream(): void
```

##### `resetInternalUpstream` <a name="resetInternalUpstream" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsOutputReference.resetInternalUpstream"></a>

```typescript
public resetInternalUpstream(): void
```

##### `resetPublish` <a name="resetPublish" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsOutputReference.resetPublish"></a>

```typescript
public resetPublish(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsOutputReference.property.externalUpstream">externalUpstream</a></code> | <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstreamOutputReference">CodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstreamOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsOutputReference.property.internalUpstream">internalUpstream</a></code> | <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstreamOutputReference">CodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstreamOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsOutputReference.property.publish">publish</a></code> | <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsPublishOutputReference">CodeartifactPackageGroupOriginConfigurationRestrictionsPublishOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsOutputReference.property.externalUpstreamInput">externalUpstreamInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstream">CodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstream</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsOutputReference.property.internalUpstreamInput">internalUpstreamInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstream">CodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstream</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsOutputReference.property.publishInput">publishInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsPublish">CodeartifactPackageGroupOriginConfigurationRestrictionsPublish</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictions">CodeartifactPackageGroupOriginConfigurationRestrictions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `externalUpstream`<sup>Required</sup> <a name="externalUpstream" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsOutputReference.property.externalUpstream"></a>

```typescript
public readonly externalUpstream: CodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstreamOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstreamOutputReference">CodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstreamOutputReference</a>

---

##### `internalUpstream`<sup>Required</sup> <a name="internalUpstream" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsOutputReference.property.internalUpstream"></a>

```typescript
public readonly internalUpstream: CodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstreamOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstreamOutputReference">CodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstreamOutputReference</a>

---

##### `publish`<sup>Required</sup> <a name="publish" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsOutputReference.property.publish"></a>

```typescript
public readonly publish: CodeartifactPackageGroupOriginConfigurationRestrictionsPublishOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsPublishOutputReference">CodeartifactPackageGroupOriginConfigurationRestrictionsPublishOutputReference</a>

---

##### `externalUpstreamInput`<sup>Optional</sup> <a name="externalUpstreamInput" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsOutputReference.property.externalUpstreamInput"></a>

```typescript
public readonly externalUpstreamInput: IResolvable | CodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstream;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstream">CodeartifactPackageGroupOriginConfigurationRestrictionsExternalUpstream</a>

---

##### `internalUpstreamInput`<sup>Optional</sup> <a name="internalUpstreamInput" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsOutputReference.property.internalUpstreamInput"></a>

```typescript
public readonly internalUpstreamInput: IResolvable | CodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstream;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstream">CodeartifactPackageGroupOriginConfigurationRestrictionsInternalUpstream</a>

---

##### `publishInput`<sup>Optional</sup> <a name="publishInput" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsOutputReference.property.publishInput"></a>

```typescript
public readonly publishInput: IResolvable | CodeartifactPackageGroupOriginConfigurationRestrictionsPublish;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsPublish">CodeartifactPackageGroupOriginConfigurationRestrictionsPublish</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CodeartifactPackageGroupOriginConfigurationRestrictions;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictions">CodeartifactPackageGroupOriginConfigurationRestrictions</a>

---


### CodeartifactPackageGroupOriginConfigurationRestrictionsPublishOutputReference <a name="CodeartifactPackageGroupOriginConfigurationRestrictionsPublishOutputReference" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsPublishOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsPublishOutputReference.Initializer"></a>

```typescript
import { codeartifactPackageGroup } from '@cdktn/provider-awscc'

new codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsPublishOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsPublishOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsPublishOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsPublishOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsPublishOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsPublishOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsPublishOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsPublishOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsPublishOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsPublishOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsPublishOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsPublishOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsPublishOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsPublishOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsPublishOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsPublishOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsPublishOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsPublishOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsPublishOutputReference.resetRepositories">resetRepositories</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsPublishOutputReference.resetRestrictionMode">resetRestrictionMode</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsPublishOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsPublishOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsPublishOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsPublishOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsPublishOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsPublishOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsPublishOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsPublishOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsPublishOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsPublishOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsPublishOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsPublishOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsPublishOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsPublishOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsPublishOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsPublishOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsPublishOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsPublishOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsPublishOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsPublishOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsPublishOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsPublishOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsPublishOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsPublishOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRepositories` <a name="resetRepositories" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsPublishOutputReference.resetRepositories"></a>

```typescript
public resetRepositories(): void
```

##### `resetRestrictionMode` <a name="resetRestrictionMode" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsPublishOutputReference.resetRestrictionMode"></a>

```typescript
public resetRestrictionMode(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsPublishOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsPublishOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsPublishOutputReference.property.repositoriesInput">repositoriesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsPublishOutputReference.property.restrictionModeInput">restrictionModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsPublishOutputReference.property.repositories">repositories</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsPublishOutputReference.property.restrictionMode">restrictionMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsPublishOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsPublish">CodeartifactPackageGroupOriginConfigurationRestrictionsPublish</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsPublishOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsPublishOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `repositoriesInput`<sup>Optional</sup> <a name="repositoriesInput" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsPublishOutputReference.property.repositoriesInput"></a>

```typescript
public readonly repositoriesInput: string[];
```

- *Type:* string[]

---

##### `restrictionModeInput`<sup>Optional</sup> <a name="restrictionModeInput" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsPublishOutputReference.property.restrictionModeInput"></a>

```typescript
public readonly restrictionModeInput: string;
```

- *Type:* string

---

##### `repositories`<sup>Required</sup> <a name="repositories" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsPublishOutputReference.property.repositories"></a>

```typescript
public readonly repositories: string[];
```

- *Type:* string[]

---

##### `restrictionMode`<sup>Required</sup> <a name="restrictionMode" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsPublishOutputReference.property.restrictionMode"></a>

```typescript
public readonly restrictionMode: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsPublishOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CodeartifactPackageGroupOriginConfigurationRestrictionsPublish;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupOriginConfigurationRestrictionsPublish">CodeartifactPackageGroupOriginConfigurationRestrictionsPublish</a>

---


### CodeartifactPackageGroupTagsList <a name="CodeartifactPackageGroupTagsList" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupTagsList.Initializer"></a>

```typescript
import { codeartifactPackageGroup } from '@cdktn/provider-awscc'

new codeartifactPackageGroup.CodeartifactPackageGroupTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupTagsList.get"></a>

```typescript
public get(index: number): CodeartifactPackageGroupTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupTags">CodeartifactPackageGroupTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CodeartifactPackageGroupTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupTags">CodeartifactPackageGroupTags</a>[]

---


### CodeartifactPackageGroupTagsOutputReference <a name="CodeartifactPackageGroupTagsOutputReference" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupTagsOutputReference.Initializer"></a>

```typescript
import { codeartifactPackageGroup } from '@cdktn/provider-awscc'

new codeartifactPackageGroup.CodeartifactPackageGroupTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupTags">CodeartifactPackageGroupTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CodeartifactPackageGroupTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.codeartifactPackageGroup.CodeartifactPackageGroupTags">CodeartifactPackageGroupTags</a>

---




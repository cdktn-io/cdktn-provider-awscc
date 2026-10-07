# `licensemanagerReportGenerator` Submodule <a name="`licensemanagerReportGenerator` Submodule" id="@cdktn/provider-awscc.licensemanagerReportGenerator"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LicensemanagerReportGenerator <a name="LicensemanagerReportGenerator" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/licensemanager_report_generator awscc_licensemanager_report_generator}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.Initializer"></a>

```typescript
import { licensemanagerReportGenerator } from '@cdktn/provider-awscc'

new licensemanagerReportGenerator.LicensemanagerReportGenerator(scope: Construct, id: string, config: LicensemanagerReportGeneratorConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorConfig">LicensemanagerReportGeneratorConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorConfig">LicensemanagerReportGeneratorConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.putReportContext">putReportContext</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.putReportFrequency">putReportFrequency</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putReportContext` <a name="putReportContext" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.putReportContext"></a>

```typescript
public putReportContext(value: LicensemanagerReportGeneratorReportContext): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.putReportContext.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportContext">LicensemanagerReportGeneratorReportContext</a>

---

##### `putReportFrequency` <a name="putReportFrequency" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.putReportFrequency"></a>

```typescript
public putReportFrequency(value: LicensemanagerReportGeneratorReportFrequency): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.putReportFrequency.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportFrequency">LicensemanagerReportGeneratorReportFrequency</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.putTags"></a>

```typescript
public putTags(value: IResolvable | LicensemanagerReportGeneratorTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTags">LicensemanagerReportGeneratorTags</a>[]

---

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a LicensemanagerReportGenerator resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.isConstruct"></a>

```typescript
import { licensemanagerReportGenerator } from '@cdktn/provider-awscc'

licensemanagerReportGenerator.LicensemanagerReportGenerator.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.isTerraformElement"></a>

```typescript
import { licensemanagerReportGenerator } from '@cdktn/provider-awscc'

licensemanagerReportGenerator.LicensemanagerReportGenerator.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.isTerraformResource"></a>

```typescript
import { licensemanagerReportGenerator } from '@cdktn/provider-awscc'

licensemanagerReportGenerator.LicensemanagerReportGenerator.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.generateConfigForImport"></a>

```typescript
import { licensemanagerReportGenerator } from '@cdktn/provider-awscc'

licensemanagerReportGenerator.LicensemanagerReportGenerator.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a LicensemanagerReportGenerator resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the LicensemanagerReportGenerator to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing LicensemanagerReportGenerator that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/licensemanager_report_generator#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the LicensemanagerReportGenerator to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.property.reportContext">reportContext</a></code> | <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportContextOutputReference">LicensemanagerReportGeneratorReportContextOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.property.reportCreatorAccount">reportCreatorAccount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.property.reportFrequency">reportFrequency</a></code> | <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportFrequencyOutputReference">LicensemanagerReportGeneratorReportFrequencyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.property.s3Location">s3Location</a></code> | <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorS3LocationOutputReference">LicensemanagerReportGeneratorS3LocationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTagsList">LicensemanagerReportGeneratorTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.property.reportContextInput">reportContextInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportContext">LicensemanagerReportGeneratorReportContext</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.property.reportFrequencyInput">reportFrequencyInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportFrequency">LicensemanagerReportGeneratorReportFrequency</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.property.reportGeneratorNameInput">reportGeneratorNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.property.reportTypeInput">reportTypeInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTags">LicensemanagerReportGeneratorTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.property.reportGeneratorName">reportGeneratorName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.property.reportType">reportType</a></code> | <code>string[]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `reportContext`<sup>Required</sup> <a name="reportContext" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.property.reportContext"></a>

```typescript
public readonly reportContext: LicensemanagerReportGeneratorReportContextOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportContextOutputReference">LicensemanagerReportGeneratorReportContextOutputReference</a>

---

##### `reportCreatorAccount`<sup>Required</sup> <a name="reportCreatorAccount" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.property.reportCreatorAccount"></a>

```typescript
public readonly reportCreatorAccount: string;
```

- *Type:* string

---

##### `reportFrequency`<sup>Required</sup> <a name="reportFrequency" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.property.reportFrequency"></a>

```typescript
public readonly reportFrequency: LicensemanagerReportGeneratorReportFrequencyOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportFrequencyOutputReference">LicensemanagerReportGeneratorReportFrequencyOutputReference</a>

---

##### `s3Location`<sup>Required</sup> <a name="s3Location" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.property.s3Location"></a>

```typescript
public readonly s3Location: LicensemanagerReportGeneratorS3LocationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorS3LocationOutputReference">LicensemanagerReportGeneratorS3LocationOutputReference</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.property.tags"></a>

```typescript
public readonly tags: LicensemanagerReportGeneratorTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTagsList">LicensemanagerReportGeneratorTagsList</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `reportContextInput`<sup>Optional</sup> <a name="reportContextInput" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.property.reportContextInput"></a>

```typescript
public readonly reportContextInput: IResolvable | LicensemanagerReportGeneratorReportContext;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportContext">LicensemanagerReportGeneratorReportContext</a>

---

##### `reportFrequencyInput`<sup>Optional</sup> <a name="reportFrequencyInput" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.property.reportFrequencyInput"></a>

```typescript
public readonly reportFrequencyInput: IResolvable | LicensemanagerReportGeneratorReportFrequency;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportFrequency">LicensemanagerReportGeneratorReportFrequency</a>

---

##### `reportGeneratorNameInput`<sup>Optional</sup> <a name="reportGeneratorNameInput" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.property.reportGeneratorNameInput"></a>

```typescript
public readonly reportGeneratorNameInput: string;
```

- *Type:* string

---

##### `reportTypeInput`<sup>Optional</sup> <a name="reportTypeInput" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.property.reportTypeInput"></a>

```typescript
public readonly reportTypeInput: string[];
```

- *Type:* string[]

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | LicensemanagerReportGeneratorTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTags">LicensemanagerReportGeneratorTags</a>[]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `reportGeneratorName`<sup>Required</sup> <a name="reportGeneratorName" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.property.reportGeneratorName"></a>

```typescript
public readonly reportGeneratorName: string;
```

- *Type:* string

---

##### `reportType`<sup>Required</sup> <a name="reportType" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.property.reportType"></a>

```typescript
public readonly reportType: string[];
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### LicensemanagerReportGeneratorConfig <a name="LicensemanagerReportGeneratorConfig" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorConfig.Initializer"></a>

```typescript
import { licensemanagerReportGenerator } from '@cdktn/provider-awscc'

const licensemanagerReportGeneratorConfig: licensemanagerReportGenerator.LicensemanagerReportGeneratorConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorConfig.property.reportContext">reportContext</a></code> | <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportContext">LicensemanagerReportGeneratorReportContext</a></code> | Details of the license configurations and asset groups that this generator reports on. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorConfig.property.reportFrequency">reportFrequency</a></code> | <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportFrequency">LicensemanagerReportGeneratorReportFrequency</a></code> | Details about how frequently reports are generated. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorConfig.property.reportGeneratorName">reportGeneratorName</a></code> | <code>string</code> | Name of the report generator. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorConfig.property.reportType">reportType</a></code> | <code>string[]</code> | Type of reports to generate. The report type determines the data reported on. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorConfig.property.description">description</a></code> | <code>string</code> | Description of the report generator. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTags">LicensemanagerReportGeneratorTags</a>[]</code> | An array of key-value pairs to apply to this resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `reportContext`<sup>Required</sup> <a name="reportContext" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorConfig.property.reportContext"></a>

```typescript
public readonly reportContext: LicensemanagerReportGeneratorReportContext;
```

- *Type:* <a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportContext">LicensemanagerReportGeneratorReportContext</a>

Details of the license configurations and asset groups that this generator reports on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/licensemanager_report_generator#report_context LicensemanagerReportGenerator#report_context}

---

##### `reportFrequency`<sup>Required</sup> <a name="reportFrequency" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorConfig.property.reportFrequency"></a>

```typescript
public readonly reportFrequency: LicensemanagerReportGeneratorReportFrequency;
```

- *Type:* <a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportFrequency">LicensemanagerReportGeneratorReportFrequency</a>

Details about how frequently reports are generated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/licensemanager_report_generator#report_frequency LicensemanagerReportGenerator#report_frequency}

---

##### `reportGeneratorName`<sup>Required</sup> <a name="reportGeneratorName" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorConfig.property.reportGeneratorName"></a>

```typescript
public readonly reportGeneratorName: string;
```

- *Type:* string

Name of the report generator.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/licensemanager_report_generator#report_generator_name LicensemanagerReportGenerator#report_generator_name}

---

##### `reportType`<sup>Required</sup> <a name="reportType" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorConfig.property.reportType"></a>

```typescript
public readonly reportType: string[];
```

- *Type:* string[]

Type of reports to generate. The report type determines the data reported on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/licensemanager_report_generator#report_type LicensemanagerReportGenerator#report_type}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Description of the report generator.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/licensemanager_report_generator#description LicensemanagerReportGenerator#description}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | LicensemanagerReportGeneratorTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTags">LicensemanagerReportGeneratorTags</a>[]

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/licensemanager_report_generator#tags LicensemanagerReportGenerator#tags}

---

### LicensemanagerReportGeneratorReportContext <a name="LicensemanagerReportGeneratorReportContext" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportContext"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportContext.Initializer"></a>

```typescript
import { licensemanagerReportGenerator } from '@cdktn/provider-awscc'

const licensemanagerReportGeneratorReportContext: licensemanagerReportGenerator.LicensemanagerReportGeneratorReportContext = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportContext.property.licenseAssetGroupArns">licenseAssetGroupArns</a></code> | <code>string[]</code> | Amazon Resource Names (ARNs) of the license asset groups to include in the report. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportContext.property.licenseConfigurationArns">licenseConfigurationArns</a></code> | <code>string[]</code> | Amazon Resource Names (ARNs) of the license configurations that this generator reports on. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportContext.property.reportEndDate">reportEndDate</a></code> | <code>string</code> | End date for the report data collection period. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportContext.property.reportStartDate">reportStartDate</a></code> | <code>string</code> | Start date for the report data collection period. |

---

##### `licenseAssetGroupArns`<sup>Optional</sup> <a name="licenseAssetGroupArns" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportContext.property.licenseAssetGroupArns"></a>

```typescript
public readonly licenseAssetGroupArns: string[];
```

- *Type:* string[]

Amazon Resource Names (ARNs) of the license asset groups to include in the report.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/licensemanager_report_generator#license_asset_group_arns LicensemanagerReportGenerator#license_asset_group_arns}

---

##### `licenseConfigurationArns`<sup>Optional</sup> <a name="licenseConfigurationArns" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportContext.property.licenseConfigurationArns"></a>

```typescript
public readonly licenseConfigurationArns: string[];
```

- *Type:* string[]

Amazon Resource Names (ARNs) of the license configurations that this generator reports on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/licensemanager_report_generator#license_configuration_arns LicensemanagerReportGenerator#license_configuration_arns}

---

##### `reportEndDate`<sup>Optional</sup> <a name="reportEndDate" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportContext.property.reportEndDate"></a>

```typescript
public readonly reportEndDate: string;
```

- *Type:* string

End date for the report data collection period.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/licensemanager_report_generator#report_end_date LicensemanagerReportGenerator#report_end_date}

---

##### `reportStartDate`<sup>Optional</sup> <a name="reportStartDate" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportContext.property.reportStartDate"></a>

```typescript
public readonly reportStartDate: string;
```

- *Type:* string

Start date for the report data collection period.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/licensemanager_report_generator#report_start_date LicensemanagerReportGenerator#report_start_date}

---

### LicensemanagerReportGeneratorReportFrequency <a name="LicensemanagerReportGeneratorReportFrequency" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportFrequency"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportFrequency.Initializer"></a>

```typescript
import { licensemanagerReportGenerator } from '@cdktn/provider-awscc'

const licensemanagerReportGeneratorReportFrequency: licensemanagerReportGenerator.LicensemanagerReportGeneratorReportFrequency = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportFrequency.property.period">period</a></code> | <code>string</code> | Time period between each report. The period can be daily, weekly, or monthly. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportFrequency.property.value">value</a></code> | <code>number</code> | Number of times within the frequency period that a report is generated. The only supported value is 1. |

---

##### `period`<sup>Optional</sup> <a name="period" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportFrequency.property.period"></a>

```typescript
public readonly period: string;
```

- *Type:* string

Time period between each report. The period can be daily, weekly, or monthly.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/licensemanager_report_generator#period LicensemanagerReportGenerator#period}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportFrequency.property.value"></a>

```typescript
public readonly value: number;
```

- *Type:* number

Number of times within the frequency period that a report is generated. The only supported value is 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/licensemanager_report_generator#value LicensemanagerReportGenerator#value}

---

### LicensemanagerReportGeneratorS3Location <a name="LicensemanagerReportGeneratorS3Location" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorS3Location"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorS3Location.Initializer"></a>

```typescript
import { licensemanagerReportGenerator } from '@cdktn/provider-awscc'

const licensemanagerReportGeneratorS3Location: licensemanagerReportGenerator.LicensemanagerReportGeneratorS3Location = { ... }
```


### LicensemanagerReportGeneratorTags <a name="LicensemanagerReportGeneratorTags" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTags.Initializer"></a>

```typescript
import { licensemanagerReportGenerator } from '@cdktn/provider-awscc'

const licensemanagerReportGeneratorTags: licensemanagerReportGenerator.LicensemanagerReportGeneratorTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTags.property.key">key</a></code> | <code>string</code> | The tag key. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTags.property.value">value</a></code> | <code>string</code> | The tag value. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

The tag key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/licensemanager_report_generator#key LicensemanagerReportGenerator#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

The tag value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/licensemanager_report_generator#value LicensemanagerReportGenerator#value}

---

## Classes <a name="Classes" id="Classes"></a>

### LicensemanagerReportGeneratorReportContextOutputReference <a name="LicensemanagerReportGeneratorReportContextOutputReference" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportContextOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportContextOutputReference.Initializer"></a>

```typescript
import { licensemanagerReportGenerator } from '@cdktn/provider-awscc'

new licensemanagerReportGenerator.LicensemanagerReportGeneratorReportContextOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportContextOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportContextOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportContextOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportContextOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportContextOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportContextOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportContextOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportContextOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportContextOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportContextOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportContextOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportContextOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportContextOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportContextOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportContextOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportContextOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportContextOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportContextOutputReference.resetLicenseAssetGroupArns">resetLicenseAssetGroupArns</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportContextOutputReference.resetLicenseConfigurationArns">resetLicenseConfigurationArns</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportContextOutputReference.resetReportEndDate">resetReportEndDate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportContextOutputReference.resetReportStartDate">resetReportStartDate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportContextOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportContextOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportContextOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportContextOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportContextOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportContextOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportContextOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportContextOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportContextOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportContextOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportContextOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportContextOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportContextOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportContextOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportContextOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportContextOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportContextOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportContextOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportContextOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportContextOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportContextOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportContextOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportContextOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportContextOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetLicenseAssetGroupArns` <a name="resetLicenseAssetGroupArns" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportContextOutputReference.resetLicenseAssetGroupArns"></a>

```typescript
public resetLicenseAssetGroupArns(): void
```

##### `resetLicenseConfigurationArns` <a name="resetLicenseConfigurationArns" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportContextOutputReference.resetLicenseConfigurationArns"></a>

```typescript
public resetLicenseConfigurationArns(): void
```

##### `resetReportEndDate` <a name="resetReportEndDate" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportContextOutputReference.resetReportEndDate"></a>

```typescript
public resetReportEndDate(): void
```

##### `resetReportStartDate` <a name="resetReportStartDate" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportContextOutputReference.resetReportStartDate"></a>

```typescript
public resetReportStartDate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportContextOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportContextOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportContextOutputReference.property.licenseAssetGroupArnsInput">licenseAssetGroupArnsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportContextOutputReference.property.licenseConfigurationArnsInput">licenseConfigurationArnsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportContextOutputReference.property.reportEndDateInput">reportEndDateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportContextOutputReference.property.reportStartDateInput">reportStartDateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportContextOutputReference.property.licenseAssetGroupArns">licenseAssetGroupArns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportContextOutputReference.property.licenseConfigurationArns">licenseConfigurationArns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportContextOutputReference.property.reportEndDate">reportEndDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportContextOutputReference.property.reportStartDate">reportStartDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportContextOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportContext">LicensemanagerReportGeneratorReportContext</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportContextOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportContextOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `licenseAssetGroupArnsInput`<sup>Optional</sup> <a name="licenseAssetGroupArnsInput" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportContextOutputReference.property.licenseAssetGroupArnsInput"></a>

```typescript
public readonly licenseAssetGroupArnsInput: string[];
```

- *Type:* string[]

---

##### `licenseConfigurationArnsInput`<sup>Optional</sup> <a name="licenseConfigurationArnsInput" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportContextOutputReference.property.licenseConfigurationArnsInput"></a>

```typescript
public readonly licenseConfigurationArnsInput: string[];
```

- *Type:* string[]

---

##### `reportEndDateInput`<sup>Optional</sup> <a name="reportEndDateInput" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportContextOutputReference.property.reportEndDateInput"></a>

```typescript
public readonly reportEndDateInput: string;
```

- *Type:* string

---

##### `reportStartDateInput`<sup>Optional</sup> <a name="reportStartDateInput" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportContextOutputReference.property.reportStartDateInput"></a>

```typescript
public readonly reportStartDateInput: string;
```

- *Type:* string

---

##### `licenseAssetGroupArns`<sup>Required</sup> <a name="licenseAssetGroupArns" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportContextOutputReference.property.licenseAssetGroupArns"></a>

```typescript
public readonly licenseAssetGroupArns: string[];
```

- *Type:* string[]

---

##### `licenseConfigurationArns`<sup>Required</sup> <a name="licenseConfigurationArns" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportContextOutputReference.property.licenseConfigurationArns"></a>

```typescript
public readonly licenseConfigurationArns: string[];
```

- *Type:* string[]

---

##### `reportEndDate`<sup>Required</sup> <a name="reportEndDate" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportContextOutputReference.property.reportEndDate"></a>

```typescript
public readonly reportEndDate: string;
```

- *Type:* string

---

##### `reportStartDate`<sup>Required</sup> <a name="reportStartDate" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportContextOutputReference.property.reportStartDate"></a>

```typescript
public readonly reportStartDate: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportContextOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LicensemanagerReportGeneratorReportContext;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportContext">LicensemanagerReportGeneratorReportContext</a>

---


### LicensemanagerReportGeneratorReportFrequencyOutputReference <a name="LicensemanagerReportGeneratorReportFrequencyOutputReference" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportFrequencyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportFrequencyOutputReference.Initializer"></a>

```typescript
import { licensemanagerReportGenerator } from '@cdktn/provider-awscc'

new licensemanagerReportGenerator.LicensemanagerReportGeneratorReportFrequencyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportFrequencyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportFrequencyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportFrequencyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportFrequencyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportFrequencyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportFrequencyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportFrequencyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportFrequencyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportFrequencyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportFrequencyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportFrequencyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportFrequencyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportFrequencyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportFrequencyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportFrequencyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportFrequencyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportFrequencyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportFrequencyOutputReference.resetPeriod">resetPeriod</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportFrequencyOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportFrequencyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportFrequencyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportFrequencyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportFrequencyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportFrequencyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportFrequencyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportFrequencyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportFrequencyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportFrequencyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportFrequencyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportFrequencyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportFrequencyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportFrequencyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportFrequencyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportFrequencyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportFrequencyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportFrequencyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportFrequencyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportFrequencyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportFrequencyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportFrequencyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportFrequencyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportFrequencyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportFrequencyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPeriod` <a name="resetPeriod" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportFrequencyOutputReference.resetPeriod"></a>

```typescript
public resetPeriod(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportFrequencyOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportFrequencyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportFrequencyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportFrequencyOutputReference.property.periodInput">periodInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportFrequencyOutputReference.property.valueInput">valueInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportFrequencyOutputReference.property.period">period</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportFrequencyOutputReference.property.value">value</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportFrequencyOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportFrequency">LicensemanagerReportGeneratorReportFrequency</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportFrequencyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportFrequencyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `periodInput`<sup>Optional</sup> <a name="periodInput" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportFrequencyOutputReference.property.periodInput"></a>

```typescript
public readonly periodInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportFrequencyOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: number;
```

- *Type:* number

---

##### `period`<sup>Required</sup> <a name="period" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportFrequencyOutputReference.property.period"></a>

```typescript
public readonly period: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportFrequencyOutputReference.property.value"></a>

```typescript
public readonly value: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportFrequencyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LicensemanagerReportGeneratorReportFrequency;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportFrequency">LicensemanagerReportGeneratorReportFrequency</a>

---


### LicensemanagerReportGeneratorS3LocationOutputReference <a name="LicensemanagerReportGeneratorS3LocationOutputReference" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorS3LocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorS3LocationOutputReference.Initializer"></a>

```typescript
import { licensemanagerReportGenerator } from '@cdktn/provider-awscc'

new licensemanagerReportGenerator.LicensemanagerReportGeneratorS3LocationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorS3LocationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorS3LocationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorS3LocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorS3LocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorS3LocationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorS3LocationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorS3LocationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorS3LocationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorS3LocationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorS3LocationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorS3LocationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorS3LocationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorS3LocationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorS3LocationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorS3LocationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorS3LocationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorS3LocationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorS3LocationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorS3LocationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorS3LocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorS3LocationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorS3LocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorS3LocationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorS3LocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorS3LocationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorS3LocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorS3LocationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorS3LocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorS3LocationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorS3LocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorS3LocationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorS3LocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorS3LocationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorS3LocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorS3LocationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorS3LocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorS3LocationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorS3LocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorS3LocationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorS3LocationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorS3LocationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorS3LocationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorS3LocationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorS3LocationOutputReference.property.bucket">bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorS3LocationOutputReference.property.keyPrefix">keyPrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorS3LocationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorS3Location">LicensemanagerReportGeneratorS3Location</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorS3LocationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorS3LocationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorS3LocationOutputReference.property.bucket"></a>

```typescript
public readonly bucket: string;
```

- *Type:* string

---

##### `keyPrefix`<sup>Required</sup> <a name="keyPrefix" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorS3LocationOutputReference.property.keyPrefix"></a>

```typescript
public readonly keyPrefix: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorS3LocationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: LicensemanagerReportGeneratorS3Location;
```

- *Type:* <a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorS3Location">LicensemanagerReportGeneratorS3Location</a>

---


### LicensemanagerReportGeneratorTagsList <a name="LicensemanagerReportGeneratorTagsList" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTagsList.Initializer"></a>

```typescript
import { licensemanagerReportGenerator } from '@cdktn/provider-awscc'

new licensemanagerReportGenerator.LicensemanagerReportGeneratorTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTagsList.get"></a>

```typescript
public get(index: number): LicensemanagerReportGeneratorTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTags">LicensemanagerReportGeneratorTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LicensemanagerReportGeneratorTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTags">LicensemanagerReportGeneratorTags</a>[]

---


### LicensemanagerReportGeneratorTagsOutputReference <a name="LicensemanagerReportGeneratorTagsOutputReference" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTagsOutputReference.Initializer"></a>

```typescript
import { licensemanagerReportGenerator } from '@cdktn/provider-awscc'

new licensemanagerReportGenerator.LicensemanagerReportGeneratorTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTags">LicensemanagerReportGeneratorTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LicensemanagerReportGeneratorTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTags">LicensemanagerReportGeneratorTags</a>

---




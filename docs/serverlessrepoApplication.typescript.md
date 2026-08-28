# `serverlessrepoApplication` Submodule <a name="`serverlessrepoApplication` Submodule" id="@cdktn/provider-awscc.serverlessrepoApplication"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ServerlessrepoApplication <a name="ServerlessrepoApplication" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/serverlessrepo_application awscc_serverlessrepo_application}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.Initializer"></a>

```typescript
import { serverlessrepoApplication } from '@cdktn/provider-awscc'

new serverlessrepoApplication.ServerlessrepoApplication(scope: Construct, id: string, config: ServerlessrepoApplicationConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplicationConfig">ServerlessrepoApplicationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplicationConfig">ServerlessrepoApplicationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.resetHomePageUrl">resetHomePageUrl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.resetLicenseBody">resetLicenseBody</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.resetReadmeBody">resetReadmeBody</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.resetSemanticVersion">resetSemanticVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.resetSourceCodeUrl">resetSourceCodeUrl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.resetSpdxLicenseId">resetSpdxLicenseId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.resetTemplateBody">resetTemplateBody</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetHomePageUrl` <a name="resetHomePageUrl" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.resetHomePageUrl"></a>

```typescript
public resetHomePageUrl(): void
```

##### `resetLabels` <a name="resetLabels" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.resetLabels"></a>

```typescript
public resetLabels(): void
```

##### `resetLicenseBody` <a name="resetLicenseBody" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.resetLicenseBody"></a>

```typescript
public resetLicenseBody(): void
```

##### `resetReadmeBody` <a name="resetReadmeBody" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.resetReadmeBody"></a>

```typescript
public resetReadmeBody(): void
```

##### `resetSemanticVersion` <a name="resetSemanticVersion" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.resetSemanticVersion"></a>

```typescript
public resetSemanticVersion(): void
```

##### `resetSourceCodeUrl` <a name="resetSourceCodeUrl" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.resetSourceCodeUrl"></a>

```typescript
public resetSourceCodeUrl(): void
```

##### `resetSpdxLicenseId` <a name="resetSpdxLicenseId" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.resetSpdxLicenseId"></a>

```typescript
public resetSpdxLicenseId(): void
```

##### `resetTemplateBody` <a name="resetTemplateBody" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.resetTemplateBody"></a>

```typescript
public resetTemplateBody(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a ServerlessrepoApplication resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.isConstruct"></a>

```typescript
import { serverlessrepoApplication } from '@cdktn/provider-awscc'

serverlessrepoApplication.ServerlessrepoApplication.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.isTerraformElement"></a>

```typescript
import { serverlessrepoApplication } from '@cdktn/provider-awscc'

serverlessrepoApplication.ServerlessrepoApplication.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.isTerraformResource"></a>

```typescript
import { serverlessrepoApplication } from '@cdktn/provider-awscc'

serverlessrepoApplication.ServerlessrepoApplication.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.generateConfigForImport"></a>

```typescript
import { serverlessrepoApplication } from '@cdktn/provider-awscc'

serverlessrepoApplication.ServerlessrepoApplication.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a ServerlessrepoApplication resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ServerlessrepoApplication to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ServerlessrepoApplication that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/serverlessrepo_application#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the ServerlessrepoApplication to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.property.applicationId">applicationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.property.creationTime">creationTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.property.isVerifiedAuthor">isVerifiedAuthor</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.property.authorInput">authorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.property.homePageUrlInput">homePageUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.property.labelsInput">labelsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.property.licenseBodyInput">licenseBodyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.property.readmeBodyInput">readmeBodyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.property.semanticVersionInput">semanticVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.property.sourceCodeUrlInput">sourceCodeUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.property.spdxLicenseIdInput">spdxLicenseIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.property.templateBodyInput">templateBodyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.property.author">author</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.property.homePageUrl">homePageUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.property.labels">labels</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.property.licenseBody">licenseBody</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.property.readmeBody">readmeBody</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.property.semanticVersion">semanticVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.property.sourceCodeUrl">sourceCodeUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.property.spdxLicenseId">spdxLicenseId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.property.templateBody">templateBody</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `applicationId`<sup>Required</sup> <a name="applicationId" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.property.applicationId"></a>

```typescript
public readonly applicationId: string;
```

- *Type:* string

---

##### `creationTime`<sup>Required</sup> <a name="creationTime" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.property.creationTime"></a>

```typescript
public readonly creationTime: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `isVerifiedAuthor`<sup>Required</sup> <a name="isVerifiedAuthor" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.property.isVerifiedAuthor"></a>

```typescript
public readonly isVerifiedAuthor: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `authorInput`<sup>Optional</sup> <a name="authorInput" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.property.authorInput"></a>

```typescript
public readonly authorInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `homePageUrlInput`<sup>Optional</sup> <a name="homePageUrlInput" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.property.homePageUrlInput"></a>

```typescript
public readonly homePageUrlInput: string;
```

- *Type:* string

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.property.labelsInput"></a>

```typescript
public readonly labelsInput: string[];
```

- *Type:* string[]

---

##### `licenseBodyInput`<sup>Optional</sup> <a name="licenseBodyInput" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.property.licenseBodyInput"></a>

```typescript
public readonly licenseBodyInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `readmeBodyInput`<sup>Optional</sup> <a name="readmeBodyInput" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.property.readmeBodyInput"></a>

```typescript
public readonly readmeBodyInput: string;
```

- *Type:* string

---

##### `semanticVersionInput`<sup>Optional</sup> <a name="semanticVersionInput" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.property.semanticVersionInput"></a>

```typescript
public readonly semanticVersionInput: string;
```

- *Type:* string

---

##### `sourceCodeUrlInput`<sup>Optional</sup> <a name="sourceCodeUrlInput" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.property.sourceCodeUrlInput"></a>

```typescript
public readonly sourceCodeUrlInput: string;
```

- *Type:* string

---

##### `spdxLicenseIdInput`<sup>Optional</sup> <a name="spdxLicenseIdInput" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.property.spdxLicenseIdInput"></a>

```typescript
public readonly spdxLicenseIdInput: string;
```

- *Type:* string

---

##### `templateBodyInput`<sup>Optional</sup> <a name="templateBodyInput" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.property.templateBodyInput"></a>

```typescript
public readonly templateBodyInput: string;
```

- *Type:* string

---

##### `author`<sup>Required</sup> <a name="author" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.property.author"></a>

```typescript
public readonly author: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `homePageUrl`<sup>Required</sup> <a name="homePageUrl" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.property.homePageUrl"></a>

```typescript
public readonly homePageUrl: string;
```

- *Type:* string

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.property.labels"></a>

```typescript
public readonly labels: string[];
```

- *Type:* string[]

---

##### `licenseBody`<sup>Required</sup> <a name="licenseBody" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.property.licenseBody"></a>

```typescript
public readonly licenseBody: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `readmeBody`<sup>Required</sup> <a name="readmeBody" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.property.readmeBody"></a>

```typescript
public readonly readmeBody: string;
```

- *Type:* string

---

##### `semanticVersion`<sup>Required</sup> <a name="semanticVersion" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.property.semanticVersion"></a>

```typescript
public readonly semanticVersion: string;
```

- *Type:* string

---

##### `sourceCodeUrl`<sup>Required</sup> <a name="sourceCodeUrl" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.property.sourceCodeUrl"></a>

```typescript
public readonly sourceCodeUrl: string;
```

- *Type:* string

---

##### `spdxLicenseId`<sup>Required</sup> <a name="spdxLicenseId" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.property.spdxLicenseId"></a>

```typescript
public readonly spdxLicenseId: string;
```

- *Type:* string

---

##### `templateBody`<sup>Required</sup> <a name="templateBody" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.property.templateBody"></a>

```typescript
public readonly templateBody: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ServerlessrepoApplicationConfig <a name="ServerlessrepoApplicationConfig" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplicationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplicationConfig.Initializer"></a>

```typescript
import { serverlessrepoApplication } from '@cdktn/provider-awscc'

const serverlessrepoApplicationConfig: serverlessrepoApplication.ServerlessrepoApplicationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplicationConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplicationConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplicationConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplicationConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplicationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplicationConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplicationConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplicationConfig.property.author">author</a></code> | <code>string</code> | The name of the author publishing the app. |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplicationConfig.property.description">description</a></code> | <code>string</code> | The description of the application. |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplicationConfig.property.name">name</a></code> | <code>string</code> | The name of the application. |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplicationConfig.property.homePageUrl">homePageUrl</a></code> | <code>string</code> | A URL with more information about the application. |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplicationConfig.property.labels">labels</a></code> | <code>string[]</code> | Labels to improve discovery of apps in search results. |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplicationConfig.property.licenseBody">licenseBody</a></code> | <code>string</code> | A local text file that contains the license of the app. |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplicationConfig.property.readmeBody">readmeBody</a></code> | <code>string</code> | A text readme file in Markdown language that contains a more detailed description of the application. |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplicationConfig.property.semanticVersion">semanticVersion</a></code> | <code>string</code> | The semantic version of the application. |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplicationConfig.property.sourceCodeUrl">sourceCodeUrl</a></code> | <code>string</code> | A link to a public repository for the source code of your application. |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplicationConfig.property.spdxLicenseId">spdxLicenseId</a></code> | <code>string</code> | A valid identifier from https://spdx.org/licenses/. |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplicationConfig.property.templateBody">templateBody</a></code> | <code>string</code> | The local raw packaged AWS SAM template file of your application. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplicationConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplicationConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplicationConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplicationConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplicationConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplicationConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplicationConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `author`<sup>Required</sup> <a name="author" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplicationConfig.property.author"></a>

```typescript
public readonly author: string;
```

- *Type:* string

The name of the author publishing the app.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/serverlessrepo_application#author ServerlessrepoApplication#author}

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplicationConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

The description of the application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/serverlessrepo_application#description ServerlessrepoApplication#description}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplicationConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/serverlessrepo_application#name ServerlessrepoApplication#name}

---

##### `homePageUrl`<sup>Optional</sup> <a name="homePageUrl" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplicationConfig.property.homePageUrl"></a>

```typescript
public readonly homePageUrl: string;
```

- *Type:* string

A URL with more information about the application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/serverlessrepo_application#home_page_url ServerlessrepoApplication#home_page_url}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplicationConfig.property.labels"></a>

```typescript
public readonly labels: string[];
```

- *Type:* string[]

Labels to improve discovery of apps in search results.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/serverlessrepo_application#labels ServerlessrepoApplication#labels}

---

##### `licenseBody`<sup>Optional</sup> <a name="licenseBody" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplicationConfig.property.licenseBody"></a>

```typescript
public readonly licenseBody: string;
```

- *Type:* string

A local text file that contains the license of the app.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/serverlessrepo_application#license_body ServerlessrepoApplication#license_body}

---

##### `readmeBody`<sup>Optional</sup> <a name="readmeBody" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplicationConfig.property.readmeBody"></a>

```typescript
public readonly readmeBody: string;
```

- *Type:* string

A text readme file in Markdown language that contains a more detailed description of the application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/serverlessrepo_application#readme_body ServerlessrepoApplication#readme_body}

---

##### `semanticVersion`<sup>Optional</sup> <a name="semanticVersion" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplicationConfig.property.semanticVersion"></a>

```typescript
public readonly semanticVersion: string;
```

- *Type:* string

The semantic version of the application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/serverlessrepo_application#semantic_version ServerlessrepoApplication#semantic_version}

---

##### `sourceCodeUrl`<sup>Optional</sup> <a name="sourceCodeUrl" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplicationConfig.property.sourceCodeUrl"></a>

```typescript
public readonly sourceCodeUrl: string;
```

- *Type:* string

A link to a public repository for the source code of your application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/serverlessrepo_application#source_code_url ServerlessrepoApplication#source_code_url}

---

##### `spdxLicenseId`<sup>Optional</sup> <a name="spdxLicenseId" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplicationConfig.property.spdxLicenseId"></a>

```typescript
public readonly spdxLicenseId: string;
```

- *Type:* string

A valid identifier from https://spdx.org/licenses/.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/serverlessrepo_application#spdx_license_id ServerlessrepoApplication#spdx_license_id}

---

##### `templateBody`<sup>Optional</sup> <a name="templateBody" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplicationConfig.property.templateBody"></a>

```typescript
public readonly templateBody: string;
```

- *Type:* string

The local raw packaged AWS SAM template file of your application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/serverlessrepo_application#template_body ServerlessrepoApplication#template_body}

---




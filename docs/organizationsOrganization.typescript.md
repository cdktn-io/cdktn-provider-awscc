# `organizationsOrganization` Submodule <a name="`organizationsOrganization` Submodule" id="@cdktn/provider-awscc.organizationsOrganization"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OrganizationsOrganization <a name="OrganizationsOrganization" id="@cdktn/provider-awscc.organizationsOrganization.OrganizationsOrganization"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/organizations_organization awscc_organizations_organization}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.organizationsOrganization.OrganizationsOrganization.Initializer"></a>

```typescript
import { organizationsOrganization } from '@cdktn/provider-awscc'

new organizationsOrganization.OrganizationsOrganization(scope: Construct, id: string, config?: OrganizationsOrganizationConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.organizationsOrganization.OrganizationsOrganization.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.organizationsOrganization.OrganizationsOrganization.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.organizationsOrganization.OrganizationsOrganization.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.organizationsOrganization.OrganizationsOrganizationConfig">OrganizationsOrganizationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.organizationsOrganization.OrganizationsOrganization.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.organizationsOrganization.OrganizationsOrganization.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktn/provider-awscc.organizationsOrganization.OrganizationsOrganization.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.organizationsOrganization.OrganizationsOrganizationConfig">OrganizationsOrganizationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.organizationsOrganization.OrganizationsOrganization.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.organizationsOrganization.OrganizationsOrganization.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.organizationsOrganization.OrganizationsOrganization.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.organizationsOrganization.OrganizationsOrganization.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.organizationsOrganization.OrganizationsOrganization.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.organizationsOrganization.OrganizationsOrganization.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.organizationsOrganization.OrganizationsOrganization.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.organizationsOrganization.OrganizationsOrganization.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.organizationsOrganization.OrganizationsOrganization.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.organizationsOrganization.OrganizationsOrganization.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.organizationsOrganization.OrganizationsOrganization.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.organizationsOrganization.OrganizationsOrganization.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.organizationsOrganization.OrganizationsOrganization.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.organizationsOrganization.OrganizationsOrganization.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.organizationsOrganization.OrganizationsOrganization.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.organizationsOrganization.OrganizationsOrganization.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.organizationsOrganization.OrganizationsOrganization.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.organizationsOrganization.OrganizationsOrganization.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.organizationsOrganization.OrganizationsOrganization.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.organizationsOrganization.OrganizationsOrganization.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.organizationsOrganization.OrganizationsOrganization.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.organizationsOrganization.OrganizationsOrganization.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.organizationsOrganization.OrganizationsOrganization.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.organizationsOrganization.OrganizationsOrganization.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.organizationsOrganization.OrganizationsOrganization.resetFeatureSet">resetFeatureSet</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.organizationsOrganization.OrganizationsOrganization.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.organizationsOrganization.OrganizationsOrganization.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.organizationsOrganization.OrganizationsOrganization.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.organizationsOrganization.OrganizationsOrganization.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.organizationsOrganization.OrganizationsOrganization.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.organizationsOrganization.OrganizationsOrganization.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.organizationsOrganization.OrganizationsOrganization.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.organizationsOrganization.OrganizationsOrganization.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.organizationsOrganization.OrganizationsOrganization.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.organizationsOrganization.OrganizationsOrganization.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.organizationsOrganization.OrganizationsOrganization.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.organizationsOrganization.OrganizationsOrganization.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.organizationsOrganization.OrganizationsOrganization.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.organizationsOrganization.OrganizationsOrganization.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.organizationsOrganization.OrganizationsOrganization.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.organizationsOrganization.OrganizationsOrganization.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.organizationsOrganization.OrganizationsOrganization.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.organizationsOrganization.OrganizationsOrganization.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.organizationsOrganization.OrganizationsOrganization.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.organizationsOrganization.OrganizationsOrganization.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.organizationsOrganization.OrganizationsOrganization.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.organizationsOrganization.OrganizationsOrganization.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.organizationsOrganization.OrganizationsOrganization.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.organizationsOrganization.OrganizationsOrganization.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.organizationsOrganization.OrganizationsOrganization.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.organizationsOrganization.OrganizationsOrganization.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.organizationsOrganization.OrganizationsOrganization.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.organizationsOrganization.OrganizationsOrganization.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.organizationsOrganization.OrganizationsOrganization.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.organizationsOrganization.OrganizationsOrganization.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.organizationsOrganization.OrganizationsOrganization.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.organizationsOrganization.OrganizationsOrganization.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.organizationsOrganization.OrganizationsOrganization.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.organizationsOrganization.OrganizationsOrganization.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.organizationsOrganization.OrganizationsOrganization.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.organizationsOrganization.OrganizationsOrganization.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.organizationsOrganization.OrganizationsOrganization.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.organizationsOrganization.OrganizationsOrganization.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.organizationsOrganization.OrganizationsOrganization.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.organizationsOrganization.OrganizationsOrganization.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.organizationsOrganization.OrganizationsOrganization.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.organizationsOrganization.OrganizationsOrganization.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.organizationsOrganization.OrganizationsOrganization.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.organizationsOrganization.OrganizationsOrganization.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.organizationsOrganization.OrganizationsOrganization.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetFeatureSet` <a name="resetFeatureSet" id="@cdktn/provider-awscc.organizationsOrganization.OrganizationsOrganization.resetFeatureSet"></a>

```typescript
public resetFeatureSet(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.organizationsOrganization.OrganizationsOrganization.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.organizationsOrganization.OrganizationsOrganization.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.organizationsOrganization.OrganizationsOrganization.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.organizationsOrganization.OrganizationsOrganization.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a OrganizationsOrganization resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.organizationsOrganization.OrganizationsOrganization.isConstruct"></a>

```typescript
import { organizationsOrganization } from '@cdktn/provider-awscc'

organizationsOrganization.OrganizationsOrganization.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.organizationsOrganization.OrganizationsOrganization.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.organizationsOrganization.OrganizationsOrganization.isTerraformElement"></a>

```typescript
import { organizationsOrganization } from '@cdktn/provider-awscc'

organizationsOrganization.OrganizationsOrganization.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.organizationsOrganization.OrganizationsOrganization.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.organizationsOrganization.OrganizationsOrganization.isTerraformResource"></a>

```typescript
import { organizationsOrganization } from '@cdktn/provider-awscc'

organizationsOrganization.OrganizationsOrganization.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.organizationsOrganization.OrganizationsOrganization.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.organizationsOrganization.OrganizationsOrganization.generateConfigForImport"></a>

```typescript
import { organizationsOrganization } from '@cdktn/provider-awscc'

organizationsOrganization.OrganizationsOrganization.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a OrganizationsOrganization resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.organizationsOrganization.OrganizationsOrganization.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.organizationsOrganization.OrganizationsOrganization.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the OrganizationsOrganization to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.organizationsOrganization.OrganizationsOrganization.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing OrganizationsOrganization that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/organizations_organization#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.organizationsOrganization.OrganizationsOrganization.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the OrganizationsOrganization to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.organizationsOrganization.OrganizationsOrganization.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.organizationsOrganization.OrganizationsOrganization.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.organizationsOrganization.OrganizationsOrganization.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.organizationsOrganization.OrganizationsOrganization.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.organizationsOrganization.OrganizationsOrganization.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.organizationsOrganization.OrganizationsOrganization.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.organizationsOrganization.OrganizationsOrganization.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.organizationsOrganization.OrganizationsOrganization.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.organizationsOrganization.OrganizationsOrganization.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.organizationsOrganization.OrganizationsOrganization.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.organizationsOrganization.OrganizationsOrganization.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.organizationsOrganization.OrganizationsOrganization.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.organizationsOrganization.OrganizationsOrganization.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.organizationsOrganization.OrganizationsOrganization.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.organizationsOrganization.OrganizationsOrganization.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.organizationsOrganization.OrganizationsOrganization.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.organizationsOrganization.OrganizationsOrganization.property.managementAccountArn">managementAccountArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.organizationsOrganization.OrganizationsOrganization.property.managementAccountEmail">managementAccountEmail</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.organizationsOrganization.OrganizationsOrganization.property.managementAccountId">managementAccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.organizationsOrganization.OrganizationsOrganization.property.organizationId">organizationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.organizationsOrganization.OrganizationsOrganization.property.rootId">rootId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.organizationsOrganization.OrganizationsOrganization.property.featureSetInput">featureSetInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.organizationsOrganization.OrganizationsOrganization.property.featureSet">featureSet</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.organizationsOrganization.OrganizationsOrganization.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.organizationsOrganization.OrganizationsOrganization.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.organizationsOrganization.OrganizationsOrganization.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.organizationsOrganization.OrganizationsOrganization.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.organizationsOrganization.OrganizationsOrganization.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.organizationsOrganization.OrganizationsOrganization.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.organizationsOrganization.OrganizationsOrganization.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.organizationsOrganization.OrganizationsOrganization.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.organizationsOrganization.OrganizationsOrganization.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.organizationsOrganization.OrganizationsOrganization.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.organizationsOrganization.OrganizationsOrganization.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.organizationsOrganization.OrganizationsOrganization.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.organizationsOrganization.OrganizationsOrganization.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.organizationsOrganization.OrganizationsOrganization.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.organizationsOrganization.OrganizationsOrganization.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.organizationsOrganization.OrganizationsOrganization.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `managementAccountArn`<sup>Required</sup> <a name="managementAccountArn" id="@cdktn/provider-awscc.organizationsOrganization.OrganizationsOrganization.property.managementAccountArn"></a>

```typescript
public readonly managementAccountArn: string;
```

- *Type:* string

---

##### `managementAccountEmail`<sup>Required</sup> <a name="managementAccountEmail" id="@cdktn/provider-awscc.organizationsOrganization.OrganizationsOrganization.property.managementAccountEmail"></a>

```typescript
public readonly managementAccountEmail: string;
```

- *Type:* string

---

##### `managementAccountId`<sup>Required</sup> <a name="managementAccountId" id="@cdktn/provider-awscc.organizationsOrganization.OrganizationsOrganization.property.managementAccountId"></a>

```typescript
public readonly managementAccountId: string;
```

- *Type:* string

---

##### `organizationId`<sup>Required</sup> <a name="organizationId" id="@cdktn/provider-awscc.organizationsOrganization.OrganizationsOrganization.property.organizationId"></a>

```typescript
public readonly organizationId: string;
```

- *Type:* string

---

##### `rootId`<sup>Required</sup> <a name="rootId" id="@cdktn/provider-awscc.organizationsOrganization.OrganizationsOrganization.property.rootId"></a>

```typescript
public readonly rootId: string;
```

- *Type:* string

---

##### `featureSetInput`<sup>Optional</sup> <a name="featureSetInput" id="@cdktn/provider-awscc.organizationsOrganization.OrganizationsOrganization.property.featureSetInput"></a>

```typescript
public readonly featureSetInput: string;
```

- *Type:* string

---

##### `featureSet`<sup>Required</sup> <a name="featureSet" id="@cdktn/provider-awscc.organizationsOrganization.OrganizationsOrganization.property.featureSet"></a>

```typescript
public readonly featureSet: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.organizationsOrganization.OrganizationsOrganization.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.organizationsOrganization.OrganizationsOrganization.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### OrganizationsOrganizationConfig <a name="OrganizationsOrganizationConfig" id="@cdktn/provider-awscc.organizationsOrganization.OrganizationsOrganizationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.organizationsOrganization.OrganizationsOrganizationConfig.Initializer"></a>

```typescript
import { organizationsOrganization } from '@cdktn/provider-awscc'

const organizationsOrganizationConfig: organizationsOrganization.OrganizationsOrganizationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.organizationsOrganization.OrganizationsOrganizationConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.organizationsOrganization.OrganizationsOrganizationConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.organizationsOrganization.OrganizationsOrganizationConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.organizationsOrganization.OrganizationsOrganizationConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.organizationsOrganization.OrganizationsOrganizationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.organizationsOrganization.OrganizationsOrganizationConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.organizationsOrganization.OrganizationsOrganizationConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.organizationsOrganization.OrganizationsOrganizationConfig.property.featureSet">featureSet</a></code> | <code>string</code> | Specifies the feature set supported by the new organization. Each feature set supports different levels of functionality. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.organizationsOrganization.OrganizationsOrganizationConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.organizationsOrganization.OrganizationsOrganizationConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.organizationsOrganization.OrganizationsOrganizationConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.organizationsOrganization.OrganizationsOrganizationConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.organizationsOrganization.OrganizationsOrganizationConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.organizationsOrganization.OrganizationsOrganizationConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.organizationsOrganization.OrganizationsOrganizationConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `featureSet`<sup>Optional</sup> <a name="featureSet" id="@cdktn/provider-awscc.organizationsOrganization.OrganizationsOrganizationConfig.property.featureSet"></a>

```typescript
public readonly featureSet: string;
```

- *Type:* string

Specifies the feature set supported by the new organization. Each feature set supports different levels of functionality.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/organizations_organization#feature_set OrganizationsOrganization#feature_set}

---




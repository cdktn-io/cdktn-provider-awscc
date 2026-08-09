# `auditmanagerAssessmentFramework` Submodule <a name="`auditmanagerAssessmentFramework` Submodule" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AuditmanagerAssessmentFramework <a name="AuditmanagerAssessmentFramework" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/auditmanager_assessment_framework awscc_auditmanager_assessment_framework}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.Initializer"></a>

```typescript
import { auditmanagerAssessmentFramework } from '@cdktn/provider-awscc'

new auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework(scope: Construct, id: string, config: AuditmanagerAssessmentFrameworkConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkConfig">AuditmanagerAssessmentFrameworkConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkConfig">AuditmanagerAssessmentFrameworkConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.putControlSets">putControlSets</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.resetComplianceType">resetComplianceType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putControlSets` <a name="putControlSets" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.putControlSets"></a>

```typescript
public putControlSets(value: IResolvable | AuditmanagerAssessmentFrameworkControlSets[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.putControlSets.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSets">AuditmanagerAssessmentFrameworkControlSets</a>[]

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.putTags"></a>

```typescript
public putTags(value: IResolvable | AuditmanagerAssessmentFrameworkTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTags">AuditmanagerAssessmentFrameworkTags</a>[]

---

##### `resetComplianceType` <a name="resetComplianceType" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.resetComplianceType"></a>

```typescript
public resetComplianceType(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a AuditmanagerAssessmentFramework resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.isConstruct"></a>

```typescript
import { auditmanagerAssessmentFramework } from '@cdktn/provider-awscc'

auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.isTerraformElement"></a>

```typescript
import { auditmanagerAssessmentFramework } from '@cdktn/provider-awscc'

auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.isTerraformResource"></a>

```typescript
import { auditmanagerAssessmentFramework } from '@cdktn/provider-awscc'

auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.generateConfigForImport"></a>

```typescript
import { auditmanagerAssessmentFramework } from '@cdktn/provider-awscc'

auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a AuditmanagerAssessmentFramework resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the AuditmanagerAssessmentFramework to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing AuditmanagerAssessmentFramework that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/auditmanager_assessment_framework#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the AuditmanagerAssessmentFramework to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.property.controlSets">controlSets</a></code> | <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsList">AuditmanagerAssessmentFrameworkControlSetsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.property.createdAt">createdAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.property.createdBy">createdBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.property.frameworkId">frameworkId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.property.lastUpdatedAt">lastUpdatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.property.lastUpdatedBy">lastUpdatedBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTagsList">AuditmanagerAssessmentFrameworkTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.property.complianceTypeInput">complianceTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.property.controlSetsInput">controlSetsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSets">AuditmanagerAssessmentFrameworkControlSets</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTags">AuditmanagerAssessmentFrameworkTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.property.complianceType">complianceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.property.name">name</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `controlSets`<sup>Required</sup> <a name="controlSets" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.property.controlSets"></a>

```typescript
public readonly controlSets: AuditmanagerAssessmentFrameworkControlSetsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsList">AuditmanagerAssessmentFrameworkControlSetsList</a>

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

---

##### `createdBy`<sup>Required</sup> <a name="createdBy" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.property.createdBy"></a>

```typescript
public readonly createdBy: string;
```

- *Type:* string

---

##### `frameworkId`<sup>Required</sup> <a name="frameworkId" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.property.frameworkId"></a>

```typescript
public readonly frameworkId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `lastUpdatedAt`<sup>Required</sup> <a name="lastUpdatedAt" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.property.lastUpdatedAt"></a>

```typescript
public readonly lastUpdatedAt: string;
```

- *Type:* string

---

##### `lastUpdatedBy`<sup>Required</sup> <a name="lastUpdatedBy" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.property.lastUpdatedBy"></a>

```typescript
public readonly lastUpdatedBy: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.property.tags"></a>

```typescript
public readonly tags: AuditmanagerAssessmentFrameworkTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTagsList">AuditmanagerAssessmentFrameworkTagsList</a>

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `complianceTypeInput`<sup>Optional</sup> <a name="complianceTypeInput" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.property.complianceTypeInput"></a>

```typescript
public readonly complianceTypeInput: string;
```

- *Type:* string

---

##### `controlSetsInput`<sup>Optional</sup> <a name="controlSetsInput" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.property.controlSetsInput"></a>

```typescript
public readonly controlSetsInput: IResolvable | AuditmanagerAssessmentFrameworkControlSets[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSets">AuditmanagerAssessmentFrameworkControlSets</a>[]

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | AuditmanagerAssessmentFrameworkTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTags">AuditmanagerAssessmentFrameworkTags</a>[]

---

##### `complianceType`<sup>Required</sup> <a name="complianceType" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.property.complianceType"></a>

```typescript
public readonly complianceType: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### AuditmanagerAssessmentFrameworkConfig <a name="AuditmanagerAssessmentFrameworkConfig" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkConfig.Initializer"></a>

```typescript
import { auditmanagerAssessmentFramework } from '@cdktn/provider-awscc'

const auditmanagerAssessmentFrameworkConfig: auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkConfig.property.controlSets">controlSets</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSets">AuditmanagerAssessmentFrameworkControlSets</a>[]</code> | The control sets that are associated with the framework. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkConfig.property.name">name</a></code> | <code>string</code> | The name of the framework. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkConfig.property.complianceType">complianceType</a></code> | <code>string</code> | The compliance type that the framework supports, such as CIS or HIPAA. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkConfig.property.description">description</a></code> | <code>string</code> | The description of the framework. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTags">AuditmanagerAssessmentFrameworkTags</a>[]</code> | The tags associated with the framework. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `controlSets`<sup>Required</sup> <a name="controlSets" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkConfig.property.controlSets"></a>

```typescript
public readonly controlSets: IResolvable | AuditmanagerAssessmentFrameworkControlSets[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSets">AuditmanagerAssessmentFrameworkControlSets</a>[]

The control sets that are associated with the framework.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/auditmanager_assessment_framework#control_sets AuditmanagerAssessmentFramework#control_sets}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the framework.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/auditmanager_assessment_framework#name AuditmanagerAssessmentFramework#name}

---

##### `complianceType`<sup>Optional</sup> <a name="complianceType" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkConfig.property.complianceType"></a>

```typescript
public readonly complianceType: string;
```

- *Type:* string

The compliance type that the framework supports, such as CIS or HIPAA.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/auditmanager_assessment_framework#compliance_type AuditmanagerAssessmentFramework#compliance_type}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

The description of the framework.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/auditmanager_assessment_framework#description AuditmanagerAssessmentFramework#description}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | AuditmanagerAssessmentFrameworkTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTags">AuditmanagerAssessmentFrameworkTags</a>[]

The tags associated with the framework.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/auditmanager_assessment_framework#tags AuditmanagerAssessmentFramework#tags}

---

### AuditmanagerAssessmentFrameworkControlSets <a name="AuditmanagerAssessmentFrameworkControlSets" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSets"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSets.Initializer"></a>

```typescript
import { auditmanagerAssessmentFramework } from '@cdktn/provider-awscc'

const auditmanagerAssessmentFrameworkControlSets: auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSets = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSets.property.controls">controls</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControls">AuditmanagerAssessmentFrameworkControlSetsControls</a>[]</code> | The list of controls within the control set. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSets.property.name">name</a></code> | <code>string</code> | The name of the control set. |

---

##### `controls`<sup>Required</sup> <a name="controls" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSets.property.controls"></a>

```typescript
public readonly controls: IResolvable | AuditmanagerAssessmentFrameworkControlSetsControls[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControls">AuditmanagerAssessmentFrameworkControlSetsControls</a>[]

The list of controls within the control set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/auditmanager_assessment_framework#controls AuditmanagerAssessmentFramework#controls}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSets.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the control set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/auditmanager_assessment_framework#name AuditmanagerAssessmentFramework#name}

---

### AuditmanagerAssessmentFrameworkControlSetsControls <a name="AuditmanagerAssessmentFrameworkControlSetsControls" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControls"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControls.Initializer"></a>

```typescript
import { auditmanagerAssessmentFramework } from '@cdktn/provider-awscc'

const auditmanagerAssessmentFrameworkControlSetsControls: auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControls = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControls.property.id">id</a></code> | <code>string</code> | The unique identifier of the control. |

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControls.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

The unique identifier of the control.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/auditmanager_assessment_framework#id AuditmanagerAssessmentFramework#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### AuditmanagerAssessmentFrameworkTags <a name="AuditmanagerAssessmentFrameworkTags" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTags.Initializer"></a>

```typescript
import { auditmanagerAssessmentFramework } from '@cdktn/provider-awscc'

const auditmanagerAssessmentFrameworkTags: auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTags.property.key">key</a></code> | <code>string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTags.property.value">value</a></code> | <code>string</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

The key name of the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/auditmanager_assessment_framework#key AuditmanagerAssessmentFramework#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

The value for the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/auditmanager_assessment_framework#value AuditmanagerAssessmentFramework#value}

---

## Classes <a name="Classes" id="Classes"></a>

### AuditmanagerAssessmentFrameworkControlSetsControlsList <a name="AuditmanagerAssessmentFrameworkControlSetsControlsList" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControlsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControlsList.Initializer"></a>

```typescript
import { auditmanagerAssessmentFramework } from '@cdktn/provider-awscc'

new auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControlsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControlsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControlsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControlsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControlsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControlsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControlsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControlsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControlsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControlsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControlsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControlsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControlsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControlsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControlsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControlsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControlsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControlsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControlsList.get"></a>

```typescript
public get(index: number): AuditmanagerAssessmentFrameworkControlSetsControlsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControlsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControlsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControlsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControlsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControls">AuditmanagerAssessmentFrameworkControlSetsControls</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControlsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControlsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControlsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AuditmanagerAssessmentFrameworkControlSetsControls[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControls">AuditmanagerAssessmentFrameworkControlSetsControls</a>[]

---


### AuditmanagerAssessmentFrameworkControlSetsControlsOutputReference <a name="AuditmanagerAssessmentFrameworkControlSetsControlsOutputReference" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControlsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControlsOutputReference.Initializer"></a>

```typescript
import { auditmanagerAssessmentFramework } from '@cdktn/provider-awscc'

new auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControlsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControlsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControlsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControlsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControlsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControlsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControlsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControlsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControlsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControlsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControlsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControlsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControlsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControlsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControlsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControlsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControlsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControlsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControlsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControlsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControlsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControlsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControlsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControlsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControlsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControlsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControlsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControlsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControlsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControlsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControlsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControlsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControlsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControlsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControlsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControlsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControlsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControlsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControlsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControlsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControlsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControlsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControlsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControlsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControlsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControlsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControlsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControlsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControlsOutputReference.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControlsOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControlsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControls">AuditmanagerAssessmentFrameworkControlSetsControls</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControlsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControlsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControlsOutputReference.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControlsOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControlsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AuditmanagerAssessmentFrameworkControlSetsControls;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControls">AuditmanagerAssessmentFrameworkControlSetsControls</a>

---


### AuditmanagerAssessmentFrameworkControlSetsList <a name="AuditmanagerAssessmentFrameworkControlSetsList" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsList.Initializer"></a>

```typescript
import { auditmanagerAssessmentFramework } from '@cdktn/provider-awscc'

new auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsList.get"></a>

```typescript
public get(index: number): AuditmanagerAssessmentFrameworkControlSetsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSets">AuditmanagerAssessmentFrameworkControlSets</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AuditmanagerAssessmentFrameworkControlSets[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSets">AuditmanagerAssessmentFrameworkControlSets</a>[]

---


### AuditmanagerAssessmentFrameworkControlSetsOutputReference <a name="AuditmanagerAssessmentFrameworkControlSetsOutputReference" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsOutputReference.Initializer"></a>

```typescript
import { auditmanagerAssessmentFramework } from '@cdktn/provider-awscc'

new auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsOutputReference.putControls">putControls</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putControls` <a name="putControls" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsOutputReference.putControls"></a>

```typescript
public putControls(value: IResolvable | AuditmanagerAssessmentFrameworkControlSetsControls[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsOutputReference.putControls.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControls">AuditmanagerAssessmentFrameworkControlSetsControls</a>[]

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsOutputReference.property.controls">controls</a></code> | <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControlsList">AuditmanagerAssessmentFrameworkControlSetsControlsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsOutputReference.property.controlsInput">controlsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControls">AuditmanagerAssessmentFrameworkControlSetsControls</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSets">AuditmanagerAssessmentFrameworkControlSets</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `controls`<sup>Required</sup> <a name="controls" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsOutputReference.property.controls"></a>

```typescript
public readonly controls: AuditmanagerAssessmentFrameworkControlSetsControlsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControlsList">AuditmanagerAssessmentFrameworkControlSetsControlsList</a>

---

##### `controlsInput`<sup>Optional</sup> <a name="controlsInput" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsOutputReference.property.controlsInput"></a>

```typescript
public readonly controlsInput: IResolvable | AuditmanagerAssessmentFrameworkControlSetsControls[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControls">AuditmanagerAssessmentFrameworkControlSetsControls</a>[]

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AuditmanagerAssessmentFrameworkControlSets;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSets">AuditmanagerAssessmentFrameworkControlSets</a>

---


### AuditmanagerAssessmentFrameworkTagsList <a name="AuditmanagerAssessmentFrameworkTagsList" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTagsList.Initializer"></a>

```typescript
import { auditmanagerAssessmentFramework } from '@cdktn/provider-awscc'

new auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTagsList.get"></a>

```typescript
public get(index: number): AuditmanagerAssessmentFrameworkTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTags">AuditmanagerAssessmentFrameworkTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AuditmanagerAssessmentFrameworkTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTags">AuditmanagerAssessmentFrameworkTags</a>[]

---


### AuditmanagerAssessmentFrameworkTagsOutputReference <a name="AuditmanagerAssessmentFrameworkTagsOutputReference" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTagsOutputReference.Initializer"></a>

```typescript
import { auditmanagerAssessmentFramework } from '@cdktn/provider-awscc'

new auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTags">AuditmanagerAssessmentFrameworkTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AuditmanagerAssessmentFrameworkTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTags">AuditmanagerAssessmentFrameworkTags</a>

---




# `auditmanagerAssessment` Submodule <a name="`auditmanagerAssessment` Submodule" id="@cdktn/provider-awscc.auditmanagerAssessment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AuditmanagerAssessment <a name="AuditmanagerAssessment" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/auditmanager_assessment awscc_auditmanager_assessment}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.Initializer"></a>

```typescript
import { auditmanagerAssessment } from '@cdktn/provider-awscc'

new auditmanagerAssessment.AuditmanagerAssessment(scope: Construct, id: string, config?: AuditmanagerAssessmentConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentConfig">AuditmanagerAssessmentConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentConfig">AuditmanagerAssessmentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.putAssessmentReportsDestination">putAssessmentReportsDestination</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.putAwsAccount">putAwsAccount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.putDelegations">putDelegations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.putRoles">putRoles</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.putScope">putScope</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.resetAssessmentReportsDestination">resetAssessmentReportsDestination</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.resetAwsAccount">resetAwsAccount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.resetDelegations">resetDelegations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.resetFrameworkId">resetFrameworkId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.resetRoles">resetRoles</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.resetScope">resetScope</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.resetStatus">resetStatus</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAssessmentReportsDestination` <a name="putAssessmentReportsDestination" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.putAssessmentReportsDestination"></a>

```typescript
public putAssessmentReportsDestination(value: AuditmanagerAssessmentAssessmentReportsDestination): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.putAssessmentReportsDestination.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestination">AuditmanagerAssessmentAssessmentReportsDestination</a>

---

##### `putAwsAccount` <a name="putAwsAccount" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.putAwsAccount"></a>

```typescript
public putAwsAccount(value: AuditmanagerAssessmentAwsAccount): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.putAwsAccount.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentAwsAccount">AuditmanagerAssessmentAwsAccount</a>

---

##### `putDelegations` <a name="putDelegations" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.putDelegations"></a>

```typescript
public putDelegations(value: IResolvable | AuditmanagerAssessmentDelegations[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.putDelegations.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegations">AuditmanagerAssessmentDelegations</a>[]

---

##### `putRoles` <a name="putRoles" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.putRoles"></a>

```typescript
public putRoles(value: IResolvable | AuditmanagerAssessmentRoles[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.putRoles.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentRoles">AuditmanagerAssessmentRoles</a>[]

---

##### `putScope` <a name="putScope" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.putScope"></a>

```typescript
public putScope(value: AuditmanagerAssessmentScope): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.putScope.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScope">AuditmanagerAssessmentScope</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.putTags"></a>

```typescript
public putTags(value: IResolvable | AuditmanagerAssessmentTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentTags">AuditmanagerAssessmentTags</a>[]

---

##### `resetAssessmentReportsDestination` <a name="resetAssessmentReportsDestination" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.resetAssessmentReportsDestination"></a>

```typescript
public resetAssessmentReportsDestination(): void
```

##### `resetAwsAccount` <a name="resetAwsAccount" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.resetAwsAccount"></a>

```typescript
public resetAwsAccount(): void
```

##### `resetDelegations` <a name="resetDelegations" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.resetDelegations"></a>

```typescript
public resetDelegations(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetFrameworkId` <a name="resetFrameworkId" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.resetFrameworkId"></a>

```typescript
public resetFrameworkId(): void
```

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.resetName"></a>

```typescript
public resetName(): void
```

##### `resetRoles` <a name="resetRoles" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.resetRoles"></a>

```typescript
public resetRoles(): void
```

##### `resetScope` <a name="resetScope" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.resetScope"></a>

```typescript
public resetScope(): void
```

##### `resetStatus` <a name="resetStatus" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.resetStatus"></a>

```typescript
public resetStatus(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a AuditmanagerAssessment resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.isConstruct"></a>

```typescript
import { auditmanagerAssessment } from '@cdktn/provider-awscc'

auditmanagerAssessment.AuditmanagerAssessment.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.isTerraformElement"></a>

```typescript
import { auditmanagerAssessment } from '@cdktn/provider-awscc'

auditmanagerAssessment.AuditmanagerAssessment.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.isTerraformResource"></a>

```typescript
import { auditmanagerAssessment } from '@cdktn/provider-awscc'

auditmanagerAssessment.AuditmanagerAssessment.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.generateConfigForImport"></a>

```typescript
import { auditmanagerAssessment } from '@cdktn/provider-awscc'

auditmanagerAssessment.AuditmanagerAssessment.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a AuditmanagerAssessment resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the AuditmanagerAssessment to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing AuditmanagerAssessment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/auditmanager_assessment#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the AuditmanagerAssessment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.property.assessmentId">assessmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.property.assessmentReportsDestination">assessmentReportsDestination</a></code> | <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestinationOutputReference">AuditmanagerAssessmentAssessmentReportsDestinationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.property.awsAccount">awsAccount</a></code> | <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentAwsAccountOutputReference">AuditmanagerAssessmentAwsAccountOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.property.creationTime">creationTime</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.property.delegations">delegations</a></code> | <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegationsList">AuditmanagerAssessmentDelegationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.property.roles">roles</a></code> | <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentRolesList">AuditmanagerAssessmentRolesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.property.scope">scope</a></code> | <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeOutputReference">AuditmanagerAssessmentScopeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentTagsList">AuditmanagerAssessmentTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.property.assessmentReportsDestinationInput">assessmentReportsDestinationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestination">AuditmanagerAssessmentAssessmentReportsDestination</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.property.awsAccountInput">awsAccountInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentAwsAccount">AuditmanagerAssessmentAwsAccount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.property.delegationsInput">delegationsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegations">AuditmanagerAssessmentDelegations</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.property.frameworkIdInput">frameworkIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.property.rolesInput">rolesInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentRoles">AuditmanagerAssessmentRoles</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.property.scopeInput">scopeInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScope">AuditmanagerAssessmentScope</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.property.statusInput">statusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentTags">AuditmanagerAssessmentTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.property.frameworkId">frameworkId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.property.status">status</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `assessmentId`<sup>Required</sup> <a name="assessmentId" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.property.assessmentId"></a>

```typescript
public readonly assessmentId: string;
```

- *Type:* string

---

##### `assessmentReportsDestination`<sup>Required</sup> <a name="assessmentReportsDestination" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.property.assessmentReportsDestination"></a>

```typescript
public readonly assessmentReportsDestination: AuditmanagerAssessmentAssessmentReportsDestinationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestinationOutputReference">AuditmanagerAssessmentAssessmentReportsDestinationOutputReference</a>

---

##### `awsAccount`<sup>Required</sup> <a name="awsAccount" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.property.awsAccount"></a>

```typescript
public readonly awsAccount: AuditmanagerAssessmentAwsAccountOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentAwsAccountOutputReference">AuditmanagerAssessmentAwsAccountOutputReference</a>

---

##### `creationTime`<sup>Required</sup> <a name="creationTime" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.property.creationTime"></a>

```typescript
public readonly creationTime: number;
```

- *Type:* number

---

##### `delegations`<sup>Required</sup> <a name="delegations" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.property.delegations"></a>

```typescript
public readonly delegations: AuditmanagerAssessmentDelegationsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegationsList">AuditmanagerAssessmentDelegationsList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `roles`<sup>Required</sup> <a name="roles" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.property.roles"></a>

```typescript
public readonly roles: AuditmanagerAssessmentRolesList;
```

- *Type:* <a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentRolesList">AuditmanagerAssessmentRolesList</a>

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.property.scope"></a>

```typescript
public readonly scope: AuditmanagerAssessmentScopeOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeOutputReference">AuditmanagerAssessmentScopeOutputReference</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.property.tags"></a>

```typescript
public readonly tags: AuditmanagerAssessmentTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentTagsList">AuditmanagerAssessmentTagsList</a>

---

##### `assessmentReportsDestinationInput`<sup>Optional</sup> <a name="assessmentReportsDestinationInput" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.property.assessmentReportsDestinationInput"></a>

```typescript
public readonly assessmentReportsDestinationInput: IResolvable | AuditmanagerAssessmentAssessmentReportsDestination;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestination">AuditmanagerAssessmentAssessmentReportsDestination</a>

---

##### `awsAccountInput`<sup>Optional</sup> <a name="awsAccountInput" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.property.awsAccountInput"></a>

```typescript
public readonly awsAccountInput: IResolvable | AuditmanagerAssessmentAwsAccount;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentAwsAccount">AuditmanagerAssessmentAwsAccount</a>

---

##### `delegationsInput`<sup>Optional</sup> <a name="delegationsInput" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.property.delegationsInput"></a>

```typescript
public readonly delegationsInput: IResolvable | AuditmanagerAssessmentDelegations[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegations">AuditmanagerAssessmentDelegations</a>[]

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `frameworkIdInput`<sup>Optional</sup> <a name="frameworkIdInput" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.property.frameworkIdInput"></a>

```typescript
public readonly frameworkIdInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `rolesInput`<sup>Optional</sup> <a name="rolesInput" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.property.rolesInput"></a>

```typescript
public readonly rolesInput: IResolvable | AuditmanagerAssessmentRoles[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentRoles">AuditmanagerAssessmentRoles</a>[]

---

##### `scopeInput`<sup>Optional</sup> <a name="scopeInput" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.property.scopeInput"></a>

```typescript
public readonly scopeInput: IResolvable | AuditmanagerAssessmentScope;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScope">AuditmanagerAssessmentScope</a>

---

##### `statusInput`<sup>Optional</sup> <a name="statusInput" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.property.statusInput"></a>

```typescript
public readonly statusInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | AuditmanagerAssessmentTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentTags">AuditmanagerAssessmentTags</a>[]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `frameworkId`<sup>Required</sup> <a name="frameworkId" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.property.frameworkId"></a>

```typescript
public readonly frameworkId: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### AuditmanagerAssessmentAssessmentReportsDestination <a name="AuditmanagerAssessmentAssessmentReportsDestination" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestination"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestination.Initializer"></a>

```typescript
import { auditmanagerAssessment } from '@cdktn/provider-awscc'

const auditmanagerAssessmentAssessmentReportsDestination: auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestination = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestination.property.destination">destination</a></code> | <code>string</code> | The URL of the specified Amazon S3 bucket. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestination.property.destinationType">destinationType</a></code> | <code>string</code> | The destination type, such as Amazon S3. |

---

##### `destination`<sup>Optional</sup> <a name="destination" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestination.property.destination"></a>

```typescript
public readonly destination: string;
```

- *Type:* string

The URL of the specified Amazon S3 bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/auditmanager_assessment#destination AuditmanagerAssessment#destination}

---

##### `destinationType`<sup>Optional</sup> <a name="destinationType" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestination.property.destinationType"></a>

```typescript
public readonly destinationType: string;
```

- *Type:* string

The destination type, such as Amazon S3.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/auditmanager_assessment#destination_type AuditmanagerAssessment#destination_type}

---

### AuditmanagerAssessmentAwsAccount <a name="AuditmanagerAssessmentAwsAccount" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentAwsAccount"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentAwsAccount.Initializer"></a>

```typescript
import { auditmanagerAssessment } from '@cdktn/provider-awscc'

const auditmanagerAssessmentAwsAccount: auditmanagerAssessment.AuditmanagerAssessmentAwsAccount = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentAwsAccount.property.emailAddress">emailAddress</a></code> | <code>string</code> | The unique identifier for the email account. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentAwsAccount.property.id">id</a></code> | <code>string</code> | The identifier for the specified AWS account. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentAwsAccount.property.name">name</a></code> | <code>string</code> | The name of the specified AWS account. |

---

##### `emailAddress`<sup>Optional</sup> <a name="emailAddress" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentAwsAccount.property.emailAddress"></a>

```typescript
public readonly emailAddress: string;
```

- *Type:* string

The unique identifier for the email account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/auditmanager_assessment#email_address AuditmanagerAssessment#email_address}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentAwsAccount.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

The identifier for the specified AWS account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/auditmanager_assessment#id AuditmanagerAssessment#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentAwsAccount.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the specified AWS account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/auditmanager_assessment#name AuditmanagerAssessment#name}

---

### AuditmanagerAssessmentConfig <a name="AuditmanagerAssessmentConfig" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentConfig.Initializer"></a>

```typescript
import { auditmanagerAssessment } from '@cdktn/provider-awscc'

const auditmanagerAssessmentConfig: auditmanagerAssessment.AuditmanagerAssessmentConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentConfig.property.assessmentReportsDestination">assessmentReportsDestination</a></code> | <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestination">AuditmanagerAssessmentAssessmentReportsDestination</a></code> | The destination in which evidence reports are stored for the specified assessment. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentConfig.property.awsAccount">awsAccount</a></code> | <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentAwsAccount">AuditmanagerAssessmentAwsAccount</a></code> | The AWS account associated with the assessment. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentConfig.property.delegations">delegations</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegations">AuditmanagerAssessmentDelegations</a>[]</code> | The list of delegations. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentConfig.property.description">description</a></code> | <code>string</code> | The description of the specified assessment. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentConfig.property.frameworkId">frameworkId</a></code> | <code>string</code> | The identifier for the specified framework. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentConfig.property.name">name</a></code> | <code>string</code> | The name of the related assessment. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentConfig.property.roles">roles</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentRoles">AuditmanagerAssessmentRoles</a>[]</code> | The list of roles for the specified assessment. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentConfig.property.scope">scope</a></code> | <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScope">AuditmanagerAssessmentScope</a></code> | The wrapper that contains the AWS accounts and AWS services in scope for the assessment. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentConfig.property.status">status</a></code> | <code>string</code> | The status of the specified assessment. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentTags">AuditmanagerAssessmentTags</a>[]</code> | The tags associated with the assessment. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `assessmentReportsDestination`<sup>Optional</sup> <a name="assessmentReportsDestination" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentConfig.property.assessmentReportsDestination"></a>

```typescript
public readonly assessmentReportsDestination: AuditmanagerAssessmentAssessmentReportsDestination;
```

- *Type:* <a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestination">AuditmanagerAssessmentAssessmentReportsDestination</a>

The destination in which evidence reports are stored for the specified assessment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/auditmanager_assessment#assessment_reports_destination AuditmanagerAssessment#assessment_reports_destination}

---

##### `awsAccount`<sup>Optional</sup> <a name="awsAccount" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentConfig.property.awsAccount"></a>

```typescript
public readonly awsAccount: AuditmanagerAssessmentAwsAccount;
```

- *Type:* <a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentAwsAccount">AuditmanagerAssessmentAwsAccount</a>

The AWS account associated with the assessment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/auditmanager_assessment#aws_account AuditmanagerAssessment#aws_account}

---

##### `delegations`<sup>Optional</sup> <a name="delegations" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentConfig.property.delegations"></a>

```typescript
public readonly delegations: IResolvable | AuditmanagerAssessmentDelegations[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegations">AuditmanagerAssessmentDelegations</a>[]

The list of delegations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/auditmanager_assessment#delegations AuditmanagerAssessment#delegations}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

The description of the specified assessment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/auditmanager_assessment#description AuditmanagerAssessment#description}

---

##### `frameworkId`<sup>Optional</sup> <a name="frameworkId" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentConfig.property.frameworkId"></a>

```typescript
public readonly frameworkId: string;
```

- *Type:* string

The identifier for the specified framework.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/auditmanager_assessment#framework_id AuditmanagerAssessment#framework_id}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the related assessment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/auditmanager_assessment#name AuditmanagerAssessment#name}

---

##### `roles`<sup>Optional</sup> <a name="roles" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentConfig.property.roles"></a>

```typescript
public readonly roles: IResolvable | AuditmanagerAssessmentRoles[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentRoles">AuditmanagerAssessmentRoles</a>[]

The list of roles for the specified assessment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/auditmanager_assessment#roles AuditmanagerAssessment#roles}

---

##### `scope`<sup>Optional</sup> <a name="scope" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentConfig.property.scope"></a>

```typescript
public readonly scope: AuditmanagerAssessmentScope;
```

- *Type:* <a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScope">AuditmanagerAssessmentScope</a>

The wrapper that contains the AWS accounts and AWS services in scope for the assessment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/auditmanager_assessment#scope AuditmanagerAssessment#scope}

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentConfig.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

The status of the specified assessment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/auditmanager_assessment#status AuditmanagerAssessment#status}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | AuditmanagerAssessmentTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentTags">AuditmanagerAssessmentTags</a>[]

The tags associated with the assessment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/auditmanager_assessment#tags AuditmanagerAssessment#tags}

---

### AuditmanagerAssessmentDelegations <a name="AuditmanagerAssessmentDelegations" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegations.Initializer"></a>

```typescript
import { auditmanagerAssessment } from '@cdktn/provider-awscc'

const auditmanagerAssessmentDelegations: auditmanagerAssessment.AuditmanagerAssessmentDelegations = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegations.property.assessmentId">assessmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/auditmanager_assessment#assessment_id AuditmanagerAssessment#assessment_id}. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegations.property.assessmentName">assessmentName</a></code> | <code>string</code> | The name of the related assessment. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegations.property.comment">comment</a></code> | <code>string</code> | The comment related to the delegation. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegations.property.controlSetId">controlSetId</a></code> | <code>string</code> | The identifier for the specified control set. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegations.property.createdBy">createdBy</a></code> | <code>string</code> | The IAM user or role that performed the action. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegations.property.creationTime">creationTime</a></code> | <code>number</code> | The sequence of characters that identifies when the event occurred. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegations.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/auditmanager_assessment#id AuditmanagerAssessment#id}. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegations.property.lastUpdated">lastUpdated</a></code> | <code>number</code> | The sequence of characters that identifies when the event occurred. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegations.property.roleArn">roleArn</a></code> | <code>string</code> | The Amazon Resource Name (ARN) of the IAM user or role. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegations.property.roleType">roleType</a></code> | <code>string</code> | The IAM role type. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegations.property.status">status</a></code> | <code>string</code> | The status of the delegation. |

---

##### `assessmentId`<sup>Optional</sup> <a name="assessmentId" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegations.property.assessmentId"></a>

```typescript
public readonly assessmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/auditmanager_assessment#assessment_id AuditmanagerAssessment#assessment_id}.

---

##### `assessmentName`<sup>Optional</sup> <a name="assessmentName" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegations.property.assessmentName"></a>

```typescript
public readonly assessmentName: string;
```

- *Type:* string

The name of the related assessment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/auditmanager_assessment#assessment_name AuditmanagerAssessment#assessment_name}

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegations.property.comment"></a>

```typescript
public readonly comment: string;
```

- *Type:* string

The comment related to the delegation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/auditmanager_assessment#comment AuditmanagerAssessment#comment}

---

##### `controlSetId`<sup>Optional</sup> <a name="controlSetId" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegations.property.controlSetId"></a>

```typescript
public readonly controlSetId: string;
```

- *Type:* string

The identifier for the specified control set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/auditmanager_assessment#control_set_id AuditmanagerAssessment#control_set_id}

---

##### `createdBy`<sup>Optional</sup> <a name="createdBy" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegations.property.createdBy"></a>

```typescript
public readonly createdBy: string;
```

- *Type:* string

The IAM user or role that performed the action.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/auditmanager_assessment#created_by AuditmanagerAssessment#created_by}

---

##### `creationTime`<sup>Optional</sup> <a name="creationTime" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegations.property.creationTime"></a>

```typescript
public readonly creationTime: number;
```

- *Type:* number

The sequence of characters that identifies when the event occurred.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/auditmanager_assessment#creation_time AuditmanagerAssessment#creation_time}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegations.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/auditmanager_assessment#id AuditmanagerAssessment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `lastUpdated`<sup>Optional</sup> <a name="lastUpdated" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegations.property.lastUpdated"></a>

```typescript
public readonly lastUpdated: number;
```

- *Type:* number

The sequence of characters that identifies when the event occurred.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/auditmanager_assessment#last_updated AuditmanagerAssessment#last_updated}

---

##### `roleArn`<sup>Optional</sup> <a name="roleArn" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegations.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

The Amazon Resource Name (ARN) of the IAM user or role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/auditmanager_assessment#role_arn AuditmanagerAssessment#role_arn}

---

##### `roleType`<sup>Optional</sup> <a name="roleType" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegations.property.roleType"></a>

```typescript
public readonly roleType: string;
```

- *Type:* string

The IAM role type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/auditmanager_assessment#role_type AuditmanagerAssessment#role_type}

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegations.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

The status of the delegation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/auditmanager_assessment#status AuditmanagerAssessment#status}

---

### AuditmanagerAssessmentRoles <a name="AuditmanagerAssessmentRoles" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentRoles"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentRoles.Initializer"></a>

```typescript
import { auditmanagerAssessment } from '@cdktn/provider-awscc'

const auditmanagerAssessmentRoles: auditmanagerAssessment.AuditmanagerAssessmentRoles = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentRoles.property.roleArn">roleArn</a></code> | <code>string</code> | The Amazon Resource Name (ARN) of the IAM user or role. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentRoles.property.roleType">roleType</a></code> | <code>string</code> | The IAM role type. |

---

##### `roleArn`<sup>Optional</sup> <a name="roleArn" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentRoles.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

The Amazon Resource Name (ARN) of the IAM user or role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/auditmanager_assessment#role_arn AuditmanagerAssessment#role_arn}

---

##### `roleType`<sup>Optional</sup> <a name="roleType" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentRoles.property.roleType"></a>

```typescript
public readonly roleType: string;
```

- *Type:* string

The IAM role type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/auditmanager_assessment#role_type AuditmanagerAssessment#role_type}

---

### AuditmanagerAssessmentScope <a name="AuditmanagerAssessmentScope" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScope"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScope.Initializer"></a>

```typescript
import { auditmanagerAssessment } from '@cdktn/provider-awscc'

const auditmanagerAssessmentScope: auditmanagerAssessment.AuditmanagerAssessmentScope = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScope.property.awsAccounts">awsAccounts</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccounts">AuditmanagerAssessmentScopeAwsAccounts</a>[]</code> | The AWS accounts included in scope. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScope.property.awsServices">awsServices</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServices">AuditmanagerAssessmentScopeAwsServices</a>[]</code> | The AWS services included in scope. |

---

##### `awsAccounts`<sup>Optional</sup> <a name="awsAccounts" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScope.property.awsAccounts"></a>

```typescript
public readonly awsAccounts: IResolvable | AuditmanagerAssessmentScopeAwsAccounts[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccounts">AuditmanagerAssessmentScopeAwsAccounts</a>[]

The AWS accounts included in scope.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/auditmanager_assessment#aws_accounts AuditmanagerAssessment#aws_accounts}

---

##### `awsServices`<sup>Optional</sup> <a name="awsServices" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScope.property.awsServices"></a>

```typescript
public readonly awsServices: IResolvable | AuditmanagerAssessmentScopeAwsServices[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServices">AuditmanagerAssessmentScopeAwsServices</a>[]

The AWS services included in scope.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/auditmanager_assessment#aws_services AuditmanagerAssessment#aws_services}

---

### AuditmanagerAssessmentScopeAwsAccounts <a name="AuditmanagerAssessmentScopeAwsAccounts" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccounts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccounts.Initializer"></a>

```typescript
import { auditmanagerAssessment } from '@cdktn/provider-awscc'

const auditmanagerAssessmentScopeAwsAccounts: auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccounts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccounts.property.emailAddress">emailAddress</a></code> | <code>string</code> | The unique identifier for the email account. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccounts.property.id">id</a></code> | <code>string</code> | The identifier for the specified AWS account. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccounts.property.name">name</a></code> | <code>string</code> | The name of the specified AWS account. |

---

##### `emailAddress`<sup>Optional</sup> <a name="emailAddress" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccounts.property.emailAddress"></a>

```typescript
public readonly emailAddress: string;
```

- *Type:* string

The unique identifier for the email account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/auditmanager_assessment#email_address AuditmanagerAssessment#email_address}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccounts.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

The identifier for the specified AWS account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/auditmanager_assessment#id AuditmanagerAssessment#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccounts.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the specified AWS account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/auditmanager_assessment#name AuditmanagerAssessment#name}

---

### AuditmanagerAssessmentScopeAwsServices <a name="AuditmanagerAssessmentScopeAwsServices" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServices"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServices.Initializer"></a>

```typescript
import { auditmanagerAssessment } from '@cdktn/provider-awscc'

const auditmanagerAssessmentScopeAwsServices: auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServices = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServices.property.serviceName">serviceName</a></code> | <code>string</code> | The name of the AWS service. |

---

##### `serviceName`<sup>Optional</sup> <a name="serviceName" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServices.property.serviceName"></a>

```typescript
public readonly serviceName: string;
```

- *Type:* string

The name of the AWS service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/auditmanager_assessment#service_name AuditmanagerAssessment#service_name}

---

### AuditmanagerAssessmentTags <a name="AuditmanagerAssessmentTags" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentTags.Initializer"></a>

```typescript
import { auditmanagerAssessment } from '@cdktn/provider-awscc'

const auditmanagerAssessmentTags: auditmanagerAssessment.AuditmanagerAssessmentTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentTags.property.key">key</a></code> | <code>string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentTags.property.value">value</a></code> | <code>string</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

The key name of the tag.

You can specify a value that is 1 to 127 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -. 

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/auditmanager_assessment#key AuditmanagerAssessment#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

The value for the tag.

You can specify a value that is 1 to 255 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -. 

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/auditmanager_assessment#value AuditmanagerAssessment#value}

---

## Classes <a name="Classes" id="Classes"></a>

### AuditmanagerAssessmentAssessmentReportsDestinationOutputReference <a name="AuditmanagerAssessmentAssessmentReportsDestinationOutputReference" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestinationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestinationOutputReference.Initializer"></a>

```typescript
import { auditmanagerAssessment } from '@cdktn/provider-awscc'

new auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestinationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestinationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestinationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestinationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestinationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestinationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestinationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestinationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestinationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestinationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestinationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestinationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestinationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestinationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestinationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestinationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestinationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestinationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestinationOutputReference.resetDestination">resetDestination</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestinationOutputReference.resetDestinationType">resetDestinationType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestinationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestinationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestinationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestinationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestinationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestinationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestinationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestinationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestinationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestinationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestinationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestinationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestinationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestinationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestinationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestinationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestinationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestinationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestinationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestinationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestinationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestinationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestinationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestinationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDestination` <a name="resetDestination" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestinationOutputReference.resetDestination"></a>

```typescript
public resetDestination(): void
```

##### `resetDestinationType` <a name="resetDestinationType" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestinationOutputReference.resetDestinationType"></a>

```typescript
public resetDestinationType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestinationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestinationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestinationOutputReference.property.destinationInput">destinationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestinationOutputReference.property.destinationTypeInput">destinationTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestinationOutputReference.property.destination">destination</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestinationOutputReference.property.destinationType">destinationType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestinationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestination">AuditmanagerAssessmentAssessmentReportsDestination</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestinationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestinationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `destinationInput`<sup>Optional</sup> <a name="destinationInput" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestinationOutputReference.property.destinationInput"></a>

```typescript
public readonly destinationInput: string;
```

- *Type:* string

---

##### `destinationTypeInput`<sup>Optional</sup> <a name="destinationTypeInput" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestinationOutputReference.property.destinationTypeInput"></a>

```typescript
public readonly destinationTypeInput: string;
```

- *Type:* string

---

##### `destination`<sup>Required</sup> <a name="destination" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestinationOutputReference.property.destination"></a>

```typescript
public readonly destination: string;
```

- *Type:* string

---

##### `destinationType`<sup>Required</sup> <a name="destinationType" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestinationOutputReference.property.destinationType"></a>

```typescript
public readonly destinationType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestinationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AuditmanagerAssessmentAssessmentReportsDestination;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestination">AuditmanagerAssessmentAssessmentReportsDestination</a>

---


### AuditmanagerAssessmentAwsAccountOutputReference <a name="AuditmanagerAssessmentAwsAccountOutputReference" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentAwsAccountOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentAwsAccountOutputReference.Initializer"></a>

```typescript
import { auditmanagerAssessment } from '@cdktn/provider-awscc'

new auditmanagerAssessment.AuditmanagerAssessmentAwsAccountOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentAwsAccountOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentAwsAccountOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentAwsAccountOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentAwsAccountOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentAwsAccountOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentAwsAccountOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentAwsAccountOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentAwsAccountOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentAwsAccountOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentAwsAccountOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentAwsAccountOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentAwsAccountOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentAwsAccountOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentAwsAccountOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentAwsAccountOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentAwsAccountOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentAwsAccountOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentAwsAccountOutputReference.resetEmailAddress">resetEmailAddress</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentAwsAccountOutputReference.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentAwsAccountOutputReference.resetName">resetName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentAwsAccountOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentAwsAccountOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentAwsAccountOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentAwsAccountOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentAwsAccountOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentAwsAccountOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentAwsAccountOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentAwsAccountOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentAwsAccountOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentAwsAccountOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentAwsAccountOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentAwsAccountOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentAwsAccountOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentAwsAccountOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentAwsAccountOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentAwsAccountOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentAwsAccountOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentAwsAccountOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentAwsAccountOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentAwsAccountOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentAwsAccountOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentAwsAccountOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentAwsAccountOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentAwsAccountOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEmailAddress` <a name="resetEmailAddress" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentAwsAccountOutputReference.resetEmailAddress"></a>

```typescript
public resetEmailAddress(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentAwsAccountOutputReference.resetId"></a>

```typescript
public resetId(): void
```

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentAwsAccountOutputReference.resetName"></a>

```typescript
public resetName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentAwsAccountOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentAwsAccountOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentAwsAccountOutputReference.property.emailAddressInput">emailAddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentAwsAccountOutputReference.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentAwsAccountOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentAwsAccountOutputReference.property.emailAddress">emailAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentAwsAccountOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentAwsAccountOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentAwsAccountOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentAwsAccount">AuditmanagerAssessmentAwsAccount</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentAwsAccountOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentAwsAccountOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `emailAddressInput`<sup>Optional</sup> <a name="emailAddressInput" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentAwsAccountOutputReference.property.emailAddressInput"></a>

```typescript
public readonly emailAddressInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentAwsAccountOutputReference.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentAwsAccountOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `emailAddress`<sup>Required</sup> <a name="emailAddress" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentAwsAccountOutputReference.property.emailAddress"></a>

```typescript
public readonly emailAddress: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentAwsAccountOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentAwsAccountOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentAwsAccountOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AuditmanagerAssessmentAwsAccount;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentAwsAccount">AuditmanagerAssessmentAwsAccount</a>

---


### AuditmanagerAssessmentDelegationsList <a name="AuditmanagerAssessmentDelegationsList" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegationsList.Initializer"></a>

```typescript
import { auditmanagerAssessment } from '@cdktn/provider-awscc'

new auditmanagerAssessment.AuditmanagerAssessmentDelegationsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegationsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegationsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegationsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegationsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegationsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegationsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegationsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegationsList.get"></a>

```typescript
public get(index: number): AuditmanagerAssessmentDelegationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegationsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegationsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegationsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegationsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegations">AuditmanagerAssessmentDelegations</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegationsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegationsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegationsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AuditmanagerAssessmentDelegations[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegations">AuditmanagerAssessmentDelegations</a>[]

---


### AuditmanagerAssessmentDelegationsOutputReference <a name="AuditmanagerAssessmentDelegationsOutputReference" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegationsOutputReference.Initializer"></a>

```typescript
import { auditmanagerAssessment } from '@cdktn/provider-awscc'

new auditmanagerAssessment.AuditmanagerAssessmentDelegationsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegationsOutputReference.resetAssessmentId">resetAssessmentId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegationsOutputReference.resetAssessmentName">resetAssessmentName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegationsOutputReference.resetComment">resetComment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegationsOutputReference.resetControlSetId">resetControlSetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegationsOutputReference.resetCreatedBy">resetCreatedBy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegationsOutputReference.resetCreationTime">resetCreationTime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegationsOutputReference.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegationsOutputReference.resetLastUpdated">resetLastUpdated</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegationsOutputReference.resetRoleArn">resetRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegationsOutputReference.resetRoleType">resetRoleType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegationsOutputReference.resetStatus">resetStatus</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegationsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegationsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegationsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegationsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegationsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegationsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegationsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegationsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegationsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegationsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegationsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegationsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegationsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAssessmentId` <a name="resetAssessmentId" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegationsOutputReference.resetAssessmentId"></a>

```typescript
public resetAssessmentId(): void
```

##### `resetAssessmentName` <a name="resetAssessmentName" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegationsOutputReference.resetAssessmentName"></a>

```typescript
public resetAssessmentName(): void
```

##### `resetComment` <a name="resetComment" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegationsOutputReference.resetComment"></a>

```typescript
public resetComment(): void
```

##### `resetControlSetId` <a name="resetControlSetId" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegationsOutputReference.resetControlSetId"></a>

```typescript
public resetControlSetId(): void
```

##### `resetCreatedBy` <a name="resetCreatedBy" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegationsOutputReference.resetCreatedBy"></a>

```typescript
public resetCreatedBy(): void
```

##### `resetCreationTime` <a name="resetCreationTime" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegationsOutputReference.resetCreationTime"></a>

```typescript
public resetCreationTime(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegationsOutputReference.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLastUpdated` <a name="resetLastUpdated" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegationsOutputReference.resetLastUpdated"></a>

```typescript
public resetLastUpdated(): void
```

##### `resetRoleArn` <a name="resetRoleArn" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegationsOutputReference.resetRoleArn"></a>

```typescript
public resetRoleArn(): void
```

##### `resetRoleType` <a name="resetRoleType" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegationsOutputReference.resetRoleType"></a>

```typescript
public resetRoleType(): void
```

##### `resetStatus` <a name="resetStatus" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegationsOutputReference.resetStatus"></a>

```typescript
public resetStatus(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegationsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegationsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegationsOutputReference.property.assessmentIdInput">assessmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegationsOutputReference.property.assessmentNameInput">assessmentNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegationsOutputReference.property.commentInput">commentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegationsOutputReference.property.controlSetIdInput">controlSetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegationsOutputReference.property.createdByInput">createdByInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegationsOutputReference.property.creationTimeInput">creationTimeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegationsOutputReference.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegationsOutputReference.property.lastUpdatedInput">lastUpdatedInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegationsOutputReference.property.roleArnInput">roleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegationsOutputReference.property.roleTypeInput">roleTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegationsOutputReference.property.statusInput">statusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegationsOutputReference.property.assessmentId">assessmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegationsOutputReference.property.assessmentName">assessmentName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegationsOutputReference.property.comment">comment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegationsOutputReference.property.controlSetId">controlSetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegationsOutputReference.property.createdBy">createdBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegationsOutputReference.property.creationTime">creationTime</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegationsOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegationsOutputReference.property.lastUpdated">lastUpdated</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegationsOutputReference.property.roleArn">roleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegationsOutputReference.property.roleType">roleType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegationsOutputReference.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegationsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegations">AuditmanagerAssessmentDelegations</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegationsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegationsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `assessmentIdInput`<sup>Optional</sup> <a name="assessmentIdInput" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegationsOutputReference.property.assessmentIdInput"></a>

```typescript
public readonly assessmentIdInput: string;
```

- *Type:* string

---

##### `assessmentNameInput`<sup>Optional</sup> <a name="assessmentNameInput" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegationsOutputReference.property.assessmentNameInput"></a>

```typescript
public readonly assessmentNameInput: string;
```

- *Type:* string

---

##### `commentInput`<sup>Optional</sup> <a name="commentInput" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegationsOutputReference.property.commentInput"></a>

```typescript
public readonly commentInput: string;
```

- *Type:* string

---

##### `controlSetIdInput`<sup>Optional</sup> <a name="controlSetIdInput" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegationsOutputReference.property.controlSetIdInput"></a>

```typescript
public readonly controlSetIdInput: string;
```

- *Type:* string

---

##### `createdByInput`<sup>Optional</sup> <a name="createdByInput" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegationsOutputReference.property.createdByInput"></a>

```typescript
public readonly createdByInput: string;
```

- *Type:* string

---

##### `creationTimeInput`<sup>Optional</sup> <a name="creationTimeInput" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegationsOutputReference.property.creationTimeInput"></a>

```typescript
public readonly creationTimeInput: number;
```

- *Type:* number

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegationsOutputReference.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `lastUpdatedInput`<sup>Optional</sup> <a name="lastUpdatedInput" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegationsOutputReference.property.lastUpdatedInput"></a>

```typescript
public readonly lastUpdatedInput: number;
```

- *Type:* number

---

##### `roleArnInput`<sup>Optional</sup> <a name="roleArnInput" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegationsOutputReference.property.roleArnInput"></a>

```typescript
public readonly roleArnInput: string;
```

- *Type:* string

---

##### `roleTypeInput`<sup>Optional</sup> <a name="roleTypeInput" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegationsOutputReference.property.roleTypeInput"></a>

```typescript
public readonly roleTypeInput: string;
```

- *Type:* string

---

##### `statusInput`<sup>Optional</sup> <a name="statusInput" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegationsOutputReference.property.statusInput"></a>

```typescript
public readonly statusInput: string;
```

- *Type:* string

---

##### `assessmentId`<sup>Required</sup> <a name="assessmentId" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegationsOutputReference.property.assessmentId"></a>

```typescript
public readonly assessmentId: string;
```

- *Type:* string

---

##### `assessmentName`<sup>Required</sup> <a name="assessmentName" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegationsOutputReference.property.assessmentName"></a>

```typescript
public readonly assessmentName: string;
```

- *Type:* string

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegationsOutputReference.property.comment"></a>

```typescript
public readonly comment: string;
```

- *Type:* string

---

##### `controlSetId`<sup>Required</sup> <a name="controlSetId" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegationsOutputReference.property.controlSetId"></a>

```typescript
public readonly controlSetId: string;
```

- *Type:* string

---

##### `createdBy`<sup>Required</sup> <a name="createdBy" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegationsOutputReference.property.createdBy"></a>

```typescript
public readonly createdBy: string;
```

- *Type:* string

---

##### `creationTime`<sup>Required</sup> <a name="creationTime" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegationsOutputReference.property.creationTime"></a>

```typescript
public readonly creationTime: number;
```

- *Type:* number

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegationsOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `lastUpdated`<sup>Required</sup> <a name="lastUpdated" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegationsOutputReference.property.lastUpdated"></a>

```typescript
public readonly lastUpdated: number;
```

- *Type:* number

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegationsOutputReference.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

---

##### `roleType`<sup>Required</sup> <a name="roleType" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegationsOutputReference.property.roleType"></a>

```typescript
public readonly roleType: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegationsOutputReference.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegationsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AuditmanagerAssessmentDelegations;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegations">AuditmanagerAssessmentDelegations</a>

---


### AuditmanagerAssessmentRolesList <a name="AuditmanagerAssessmentRolesList" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentRolesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentRolesList.Initializer"></a>

```typescript
import { auditmanagerAssessment } from '@cdktn/provider-awscc'

new auditmanagerAssessment.AuditmanagerAssessmentRolesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentRolesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentRolesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentRolesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentRolesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentRolesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentRolesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentRolesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentRolesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentRolesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentRolesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentRolesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentRolesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentRolesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentRolesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentRolesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentRolesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentRolesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentRolesList.get"></a>

```typescript
public get(index: number): AuditmanagerAssessmentRolesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentRolesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentRolesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentRolesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentRolesList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentRoles">AuditmanagerAssessmentRoles</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentRolesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentRolesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentRolesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AuditmanagerAssessmentRoles[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentRoles">AuditmanagerAssessmentRoles</a>[]

---


### AuditmanagerAssessmentRolesOutputReference <a name="AuditmanagerAssessmentRolesOutputReference" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentRolesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentRolesOutputReference.Initializer"></a>

```typescript
import { auditmanagerAssessment } from '@cdktn/provider-awscc'

new auditmanagerAssessment.AuditmanagerAssessmentRolesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentRolesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentRolesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentRolesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentRolesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentRolesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentRolesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentRolesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentRolesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentRolesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentRolesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentRolesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentRolesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentRolesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentRolesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentRolesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentRolesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentRolesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentRolesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentRolesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentRolesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentRolesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentRolesOutputReference.resetRoleArn">resetRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentRolesOutputReference.resetRoleType">resetRoleType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentRolesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentRolesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentRolesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentRolesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentRolesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentRolesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentRolesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentRolesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentRolesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentRolesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentRolesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentRolesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentRolesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentRolesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentRolesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentRolesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentRolesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentRolesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentRolesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentRolesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentRolesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentRolesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentRolesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentRolesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRoleArn` <a name="resetRoleArn" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentRolesOutputReference.resetRoleArn"></a>

```typescript
public resetRoleArn(): void
```

##### `resetRoleType` <a name="resetRoleType" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentRolesOutputReference.resetRoleType"></a>

```typescript
public resetRoleType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentRolesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentRolesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentRolesOutputReference.property.roleArnInput">roleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentRolesOutputReference.property.roleTypeInput">roleTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentRolesOutputReference.property.roleArn">roleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentRolesOutputReference.property.roleType">roleType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentRolesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentRoles">AuditmanagerAssessmentRoles</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentRolesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentRolesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `roleArnInput`<sup>Optional</sup> <a name="roleArnInput" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentRolesOutputReference.property.roleArnInput"></a>

```typescript
public readonly roleArnInput: string;
```

- *Type:* string

---

##### `roleTypeInput`<sup>Optional</sup> <a name="roleTypeInput" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentRolesOutputReference.property.roleTypeInput"></a>

```typescript
public readonly roleTypeInput: string;
```

- *Type:* string

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentRolesOutputReference.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

---

##### `roleType`<sup>Required</sup> <a name="roleType" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentRolesOutputReference.property.roleType"></a>

```typescript
public readonly roleType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentRolesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AuditmanagerAssessmentRoles;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentRoles">AuditmanagerAssessmentRoles</a>

---


### AuditmanagerAssessmentScopeAwsAccountsList <a name="AuditmanagerAssessmentScopeAwsAccountsList" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsList.Initializer"></a>

```typescript
import { auditmanagerAssessment } from '@cdktn/provider-awscc'

new auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsList.get"></a>

```typescript
public get(index: number): AuditmanagerAssessmentScopeAwsAccountsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccounts">AuditmanagerAssessmentScopeAwsAccounts</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AuditmanagerAssessmentScopeAwsAccounts[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccounts">AuditmanagerAssessmentScopeAwsAccounts</a>[]

---


### AuditmanagerAssessmentScopeAwsAccountsOutputReference <a name="AuditmanagerAssessmentScopeAwsAccountsOutputReference" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsOutputReference.Initializer"></a>

```typescript
import { auditmanagerAssessment } from '@cdktn/provider-awscc'

new auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsOutputReference.resetEmailAddress">resetEmailAddress</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsOutputReference.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsOutputReference.resetName">resetName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEmailAddress` <a name="resetEmailAddress" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsOutputReference.resetEmailAddress"></a>

```typescript
public resetEmailAddress(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsOutputReference.resetId"></a>

```typescript
public resetId(): void
```

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsOutputReference.resetName"></a>

```typescript
public resetName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsOutputReference.property.emailAddressInput">emailAddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsOutputReference.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsOutputReference.property.emailAddress">emailAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccounts">AuditmanagerAssessmentScopeAwsAccounts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `emailAddressInput`<sup>Optional</sup> <a name="emailAddressInput" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsOutputReference.property.emailAddressInput"></a>

```typescript
public readonly emailAddressInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsOutputReference.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `emailAddress`<sup>Required</sup> <a name="emailAddress" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsOutputReference.property.emailAddress"></a>

```typescript
public readonly emailAddress: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AuditmanagerAssessmentScopeAwsAccounts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccounts">AuditmanagerAssessmentScopeAwsAccounts</a>

---


### AuditmanagerAssessmentScopeAwsServicesList <a name="AuditmanagerAssessmentScopeAwsServicesList" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesList.Initializer"></a>

```typescript
import { auditmanagerAssessment } from '@cdktn/provider-awscc'

new auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesList.get"></a>

```typescript
public get(index: number): AuditmanagerAssessmentScopeAwsServicesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServices">AuditmanagerAssessmentScopeAwsServices</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AuditmanagerAssessmentScopeAwsServices[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServices">AuditmanagerAssessmentScopeAwsServices</a>[]

---


### AuditmanagerAssessmentScopeAwsServicesOutputReference <a name="AuditmanagerAssessmentScopeAwsServicesOutputReference" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesOutputReference.Initializer"></a>

```typescript
import { auditmanagerAssessment } from '@cdktn/provider-awscc'

new auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesOutputReference.resetServiceName">resetServiceName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetServiceName` <a name="resetServiceName" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesOutputReference.resetServiceName"></a>

```typescript
public resetServiceName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesOutputReference.property.serviceNameInput">serviceNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesOutputReference.property.serviceName">serviceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServices">AuditmanagerAssessmentScopeAwsServices</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `serviceNameInput`<sup>Optional</sup> <a name="serviceNameInput" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesOutputReference.property.serviceNameInput"></a>

```typescript
public readonly serviceNameInput: string;
```

- *Type:* string

---

##### `serviceName`<sup>Required</sup> <a name="serviceName" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesOutputReference.property.serviceName"></a>

```typescript
public readonly serviceName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AuditmanagerAssessmentScopeAwsServices;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServices">AuditmanagerAssessmentScopeAwsServices</a>

---


### AuditmanagerAssessmentScopeOutputReference <a name="AuditmanagerAssessmentScopeOutputReference" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeOutputReference.Initializer"></a>

```typescript
import { auditmanagerAssessment } from '@cdktn/provider-awscc'

new auditmanagerAssessment.AuditmanagerAssessmentScopeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeOutputReference.putAwsAccounts">putAwsAccounts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeOutputReference.putAwsServices">putAwsServices</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeOutputReference.resetAwsAccounts">resetAwsAccounts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeOutputReference.resetAwsServices">resetAwsServices</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAwsAccounts` <a name="putAwsAccounts" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeOutputReference.putAwsAccounts"></a>

```typescript
public putAwsAccounts(value: IResolvable | AuditmanagerAssessmentScopeAwsAccounts[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeOutputReference.putAwsAccounts.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccounts">AuditmanagerAssessmentScopeAwsAccounts</a>[]

---

##### `putAwsServices` <a name="putAwsServices" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeOutputReference.putAwsServices"></a>

```typescript
public putAwsServices(value: IResolvable | AuditmanagerAssessmentScopeAwsServices[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeOutputReference.putAwsServices.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServices">AuditmanagerAssessmentScopeAwsServices</a>[]

---

##### `resetAwsAccounts` <a name="resetAwsAccounts" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeOutputReference.resetAwsAccounts"></a>

```typescript
public resetAwsAccounts(): void
```

##### `resetAwsServices` <a name="resetAwsServices" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeOutputReference.resetAwsServices"></a>

```typescript
public resetAwsServices(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeOutputReference.property.awsAccounts">awsAccounts</a></code> | <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsList">AuditmanagerAssessmentScopeAwsAccountsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeOutputReference.property.awsServices">awsServices</a></code> | <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesList">AuditmanagerAssessmentScopeAwsServicesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeOutputReference.property.awsAccountsInput">awsAccountsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccounts">AuditmanagerAssessmentScopeAwsAccounts</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeOutputReference.property.awsServicesInput">awsServicesInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServices">AuditmanagerAssessmentScopeAwsServices</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScope">AuditmanagerAssessmentScope</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `awsAccounts`<sup>Required</sup> <a name="awsAccounts" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeOutputReference.property.awsAccounts"></a>

```typescript
public readonly awsAccounts: AuditmanagerAssessmentScopeAwsAccountsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsList">AuditmanagerAssessmentScopeAwsAccountsList</a>

---

##### `awsServices`<sup>Required</sup> <a name="awsServices" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeOutputReference.property.awsServices"></a>

```typescript
public readonly awsServices: AuditmanagerAssessmentScopeAwsServicesList;
```

- *Type:* <a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesList">AuditmanagerAssessmentScopeAwsServicesList</a>

---

##### `awsAccountsInput`<sup>Optional</sup> <a name="awsAccountsInput" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeOutputReference.property.awsAccountsInput"></a>

```typescript
public readonly awsAccountsInput: IResolvable | AuditmanagerAssessmentScopeAwsAccounts[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccounts">AuditmanagerAssessmentScopeAwsAccounts</a>[]

---

##### `awsServicesInput`<sup>Optional</sup> <a name="awsServicesInput" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeOutputReference.property.awsServicesInput"></a>

```typescript
public readonly awsServicesInput: IResolvable | AuditmanagerAssessmentScopeAwsServices[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServices">AuditmanagerAssessmentScopeAwsServices</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AuditmanagerAssessmentScope;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScope">AuditmanagerAssessmentScope</a>

---


### AuditmanagerAssessmentTagsList <a name="AuditmanagerAssessmentTagsList" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentTagsList.Initializer"></a>

```typescript
import { auditmanagerAssessment } from '@cdktn/provider-awscc'

new auditmanagerAssessment.AuditmanagerAssessmentTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentTagsList.get"></a>

```typescript
public get(index: number): AuditmanagerAssessmentTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentTags">AuditmanagerAssessmentTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AuditmanagerAssessmentTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentTags">AuditmanagerAssessmentTags</a>[]

---


### AuditmanagerAssessmentTagsOutputReference <a name="AuditmanagerAssessmentTagsOutputReference" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentTagsOutputReference.Initializer"></a>

```typescript
import { auditmanagerAssessment } from '@cdktn/provider-awscc'

new auditmanagerAssessment.AuditmanagerAssessmentTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentTags">AuditmanagerAssessmentTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AuditmanagerAssessmentTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentTags">AuditmanagerAssessmentTags</a>

---




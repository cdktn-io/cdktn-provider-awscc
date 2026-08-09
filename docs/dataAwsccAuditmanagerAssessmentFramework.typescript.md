# `dataAwsccAuditmanagerAssessmentFramework` Submodule <a name="`dataAwsccAuditmanagerAssessmentFramework` Submodule" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessmentFramework"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccAuditmanagerAssessmentFramework <a name="DataAwsccAuditmanagerAssessmentFramework" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessmentFramework.DataAwsccAuditmanagerAssessmentFramework"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/auditmanager_assessment_framework awscc_auditmanager_assessment_framework}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessmentFramework.DataAwsccAuditmanagerAssessmentFramework.Initializer"></a>

```typescript
import { dataAwsccAuditmanagerAssessmentFramework } from '@cdktn/provider-awscc'

new dataAwsccAuditmanagerAssessmentFramework.DataAwsccAuditmanagerAssessmentFramework(scope: Construct, id: string, config: DataAwsccAuditmanagerAssessmentFrameworkConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessmentFramework.DataAwsccAuditmanagerAssessmentFramework.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessmentFramework.DataAwsccAuditmanagerAssessmentFramework.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessmentFramework.DataAwsccAuditmanagerAssessmentFramework.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessmentFramework.DataAwsccAuditmanagerAssessmentFrameworkConfig">DataAwsccAuditmanagerAssessmentFrameworkConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessmentFramework.DataAwsccAuditmanagerAssessmentFramework.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessmentFramework.DataAwsccAuditmanagerAssessmentFramework.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessmentFramework.DataAwsccAuditmanagerAssessmentFramework.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessmentFramework.DataAwsccAuditmanagerAssessmentFrameworkConfig">DataAwsccAuditmanagerAssessmentFrameworkConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessmentFramework.DataAwsccAuditmanagerAssessmentFramework.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessmentFramework.DataAwsccAuditmanagerAssessmentFramework.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessmentFramework.DataAwsccAuditmanagerAssessmentFramework.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessmentFramework.DataAwsccAuditmanagerAssessmentFramework.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessmentFramework.DataAwsccAuditmanagerAssessmentFramework.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessmentFramework.DataAwsccAuditmanagerAssessmentFramework.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessmentFramework.DataAwsccAuditmanagerAssessmentFramework.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessmentFramework.DataAwsccAuditmanagerAssessmentFramework.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessmentFramework.DataAwsccAuditmanagerAssessmentFramework.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessmentFramework.DataAwsccAuditmanagerAssessmentFramework.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessmentFramework.DataAwsccAuditmanagerAssessmentFramework.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessmentFramework.DataAwsccAuditmanagerAssessmentFramework.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessmentFramework.DataAwsccAuditmanagerAssessmentFramework.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessmentFramework.DataAwsccAuditmanagerAssessmentFramework.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessmentFramework.DataAwsccAuditmanagerAssessmentFramework.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessmentFramework.DataAwsccAuditmanagerAssessmentFramework.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessmentFramework.DataAwsccAuditmanagerAssessmentFramework.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessmentFramework.DataAwsccAuditmanagerAssessmentFramework.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessmentFramework.DataAwsccAuditmanagerAssessmentFramework.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessmentFramework.DataAwsccAuditmanagerAssessmentFramework.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessmentFramework.DataAwsccAuditmanagerAssessmentFramework.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessmentFramework.DataAwsccAuditmanagerAssessmentFramework.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessmentFramework.DataAwsccAuditmanagerAssessmentFramework.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessmentFramework.DataAwsccAuditmanagerAssessmentFramework.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessmentFramework.DataAwsccAuditmanagerAssessmentFramework.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessmentFramework.DataAwsccAuditmanagerAssessmentFramework.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessmentFramework.DataAwsccAuditmanagerAssessmentFramework.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessmentFramework.DataAwsccAuditmanagerAssessmentFramework.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessmentFramework.DataAwsccAuditmanagerAssessmentFramework.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessmentFramework.DataAwsccAuditmanagerAssessmentFramework.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessmentFramework.DataAwsccAuditmanagerAssessmentFramework.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessmentFramework.DataAwsccAuditmanagerAssessmentFramework.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessmentFramework.DataAwsccAuditmanagerAssessmentFramework.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessmentFramework.DataAwsccAuditmanagerAssessmentFramework.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessmentFramework.DataAwsccAuditmanagerAssessmentFramework.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessmentFramework.DataAwsccAuditmanagerAssessmentFramework.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessmentFramework.DataAwsccAuditmanagerAssessmentFramework.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessmentFramework.DataAwsccAuditmanagerAssessmentFramework.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessmentFramework.DataAwsccAuditmanagerAssessmentFramework.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessmentFramework.DataAwsccAuditmanagerAssessmentFramework.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessmentFramework.DataAwsccAuditmanagerAssessmentFramework.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessmentFramework.DataAwsccAuditmanagerAssessmentFramework.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessmentFramework.DataAwsccAuditmanagerAssessmentFramework.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessmentFramework.DataAwsccAuditmanagerAssessmentFramework.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessmentFramework.DataAwsccAuditmanagerAssessmentFramework.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessmentFramework.DataAwsccAuditmanagerAssessmentFramework.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessmentFramework.DataAwsccAuditmanagerAssessmentFramework.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessmentFramework.DataAwsccAuditmanagerAssessmentFramework.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessmentFramework.DataAwsccAuditmanagerAssessmentFramework.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessmentFramework.DataAwsccAuditmanagerAssessmentFramework.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessmentFramework.DataAwsccAuditmanagerAssessmentFramework.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessmentFramework.DataAwsccAuditmanagerAssessmentFramework.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessmentFramework.DataAwsccAuditmanagerAssessmentFramework.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessmentFramework.DataAwsccAuditmanagerAssessmentFramework.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccAuditmanagerAssessmentFramework resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessmentFramework.DataAwsccAuditmanagerAssessmentFramework.isConstruct"></a>

```typescript
import { dataAwsccAuditmanagerAssessmentFramework } from '@cdktn/provider-awscc'

dataAwsccAuditmanagerAssessmentFramework.DataAwsccAuditmanagerAssessmentFramework.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessmentFramework.DataAwsccAuditmanagerAssessmentFramework.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessmentFramework.DataAwsccAuditmanagerAssessmentFramework.isTerraformElement"></a>

```typescript
import { dataAwsccAuditmanagerAssessmentFramework } from '@cdktn/provider-awscc'

dataAwsccAuditmanagerAssessmentFramework.DataAwsccAuditmanagerAssessmentFramework.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessmentFramework.DataAwsccAuditmanagerAssessmentFramework.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessmentFramework.DataAwsccAuditmanagerAssessmentFramework.isTerraformDataSource"></a>

```typescript
import { dataAwsccAuditmanagerAssessmentFramework } from '@cdktn/provider-awscc'

dataAwsccAuditmanagerAssessmentFramework.DataAwsccAuditmanagerAssessmentFramework.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessmentFramework.DataAwsccAuditmanagerAssessmentFramework.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessmentFramework.DataAwsccAuditmanagerAssessmentFramework.generateConfigForImport"></a>

```typescript
import { dataAwsccAuditmanagerAssessmentFramework } from '@cdktn/provider-awscc'

dataAwsccAuditmanagerAssessmentFramework.DataAwsccAuditmanagerAssessmentFramework.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAwsccAuditmanagerAssessmentFramework resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessmentFramework.DataAwsccAuditmanagerAssessmentFramework.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessmentFramework.DataAwsccAuditmanagerAssessmentFramework.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccAuditmanagerAssessmentFramework to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessmentFramework.DataAwsccAuditmanagerAssessmentFramework.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccAuditmanagerAssessmentFramework that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/auditmanager_assessment_framework#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessmentFramework.DataAwsccAuditmanagerAssessmentFramework.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccAuditmanagerAssessmentFramework to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessmentFramework.DataAwsccAuditmanagerAssessmentFramework.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessmentFramework.DataAwsccAuditmanagerAssessmentFramework.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessmentFramework.DataAwsccAuditmanagerAssessmentFramework.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessmentFramework.DataAwsccAuditmanagerAssessmentFramework.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessmentFramework.DataAwsccAuditmanagerAssessmentFramework.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessmentFramework.DataAwsccAuditmanagerAssessmentFramework.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessmentFramework.DataAwsccAuditmanagerAssessmentFramework.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessmentFramework.DataAwsccAuditmanagerAssessmentFramework.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessmentFramework.DataAwsccAuditmanagerAssessmentFramework.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessmentFramework.DataAwsccAuditmanagerAssessmentFramework.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessmentFramework.DataAwsccAuditmanagerAssessmentFramework.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessmentFramework.DataAwsccAuditmanagerAssessmentFramework.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessmentFramework.DataAwsccAuditmanagerAssessmentFramework.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessmentFramework.DataAwsccAuditmanagerAssessmentFramework.property.complianceType">complianceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessmentFramework.DataAwsccAuditmanagerAssessmentFramework.property.controlSets">controlSets</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessmentFramework.DataAwsccAuditmanagerAssessmentFrameworkControlSetsList">DataAwsccAuditmanagerAssessmentFrameworkControlSetsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessmentFramework.DataAwsccAuditmanagerAssessmentFramework.property.createdAt">createdAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessmentFramework.DataAwsccAuditmanagerAssessmentFramework.property.createdBy">createdBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessmentFramework.DataAwsccAuditmanagerAssessmentFramework.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessmentFramework.DataAwsccAuditmanagerAssessmentFramework.property.frameworkId">frameworkId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessmentFramework.DataAwsccAuditmanagerAssessmentFramework.property.lastUpdatedAt">lastUpdatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessmentFramework.DataAwsccAuditmanagerAssessmentFramework.property.lastUpdatedBy">lastUpdatedBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessmentFramework.DataAwsccAuditmanagerAssessmentFramework.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessmentFramework.DataAwsccAuditmanagerAssessmentFramework.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessmentFramework.DataAwsccAuditmanagerAssessmentFrameworkTagsList">DataAwsccAuditmanagerAssessmentFrameworkTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessmentFramework.DataAwsccAuditmanagerAssessmentFramework.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessmentFramework.DataAwsccAuditmanagerAssessmentFramework.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessmentFramework.DataAwsccAuditmanagerAssessmentFramework.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessmentFramework.DataAwsccAuditmanagerAssessmentFramework.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessmentFramework.DataAwsccAuditmanagerAssessmentFramework.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessmentFramework.DataAwsccAuditmanagerAssessmentFramework.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessmentFramework.DataAwsccAuditmanagerAssessmentFramework.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessmentFramework.DataAwsccAuditmanagerAssessmentFramework.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessmentFramework.DataAwsccAuditmanagerAssessmentFramework.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessmentFramework.DataAwsccAuditmanagerAssessmentFramework.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessmentFramework.DataAwsccAuditmanagerAssessmentFramework.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessmentFramework.DataAwsccAuditmanagerAssessmentFramework.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessmentFramework.DataAwsccAuditmanagerAssessmentFramework.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessmentFramework.DataAwsccAuditmanagerAssessmentFramework.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessmentFramework.DataAwsccAuditmanagerAssessmentFramework.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessmentFramework.DataAwsccAuditmanagerAssessmentFramework.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `complianceType`<sup>Required</sup> <a name="complianceType" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessmentFramework.DataAwsccAuditmanagerAssessmentFramework.property.complianceType"></a>

```typescript
public readonly complianceType: string;
```

- *Type:* string

---

##### `controlSets`<sup>Required</sup> <a name="controlSets" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessmentFramework.DataAwsccAuditmanagerAssessmentFramework.property.controlSets"></a>

```typescript
public readonly controlSets: DataAwsccAuditmanagerAssessmentFrameworkControlSetsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessmentFramework.DataAwsccAuditmanagerAssessmentFrameworkControlSetsList">DataAwsccAuditmanagerAssessmentFrameworkControlSetsList</a>

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessmentFramework.DataAwsccAuditmanagerAssessmentFramework.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

---

##### `createdBy`<sup>Required</sup> <a name="createdBy" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessmentFramework.DataAwsccAuditmanagerAssessmentFramework.property.createdBy"></a>

```typescript
public readonly createdBy: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessmentFramework.DataAwsccAuditmanagerAssessmentFramework.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `frameworkId`<sup>Required</sup> <a name="frameworkId" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessmentFramework.DataAwsccAuditmanagerAssessmentFramework.property.frameworkId"></a>

```typescript
public readonly frameworkId: string;
```

- *Type:* string

---

##### `lastUpdatedAt`<sup>Required</sup> <a name="lastUpdatedAt" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessmentFramework.DataAwsccAuditmanagerAssessmentFramework.property.lastUpdatedAt"></a>

```typescript
public readonly lastUpdatedAt: string;
```

- *Type:* string

---

##### `lastUpdatedBy`<sup>Required</sup> <a name="lastUpdatedBy" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessmentFramework.DataAwsccAuditmanagerAssessmentFramework.property.lastUpdatedBy"></a>

```typescript
public readonly lastUpdatedBy: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessmentFramework.DataAwsccAuditmanagerAssessmentFramework.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessmentFramework.DataAwsccAuditmanagerAssessmentFramework.property.tags"></a>

```typescript
public readonly tags: DataAwsccAuditmanagerAssessmentFrameworkTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessmentFramework.DataAwsccAuditmanagerAssessmentFrameworkTagsList">DataAwsccAuditmanagerAssessmentFrameworkTagsList</a>

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessmentFramework.DataAwsccAuditmanagerAssessmentFramework.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessmentFramework.DataAwsccAuditmanagerAssessmentFramework.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessmentFramework.DataAwsccAuditmanagerAssessmentFramework.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessmentFramework.DataAwsccAuditmanagerAssessmentFramework.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessmentFramework.DataAwsccAuditmanagerAssessmentFramework.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccAuditmanagerAssessmentFrameworkConfig <a name="DataAwsccAuditmanagerAssessmentFrameworkConfig" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessmentFramework.DataAwsccAuditmanagerAssessmentFrameworkConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessmentFramework.DataAwsccAuditmanagerAssessmentFrameworkConfig.Initializer"></a>

```typescript
import { dataAwsccAuditmanagerAssessmentFramework } from '@cdktn/provider-awscc'

const dataAwsccAuditmanagerAssessmentFrameworkConfig: dataAwsccAuditmanagerAssessmentFramework.DataAwsccAuditmanagerAssessmentFrameworkConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessmentFramework.DataAwsccAuditmanagerAssessmentFrameworkConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessmentFramework.DataAwsccAuditmanagerAssessmentFrameworkConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessmentFramework.DataAwsccAuditmanagerAssessmentFrameworkConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessmentFramework.DataAwsccAuditmanagerAssessmentFrameworkConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessmentFramework.DataAwsccAuditmanagerAssessmentFrameworkConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessmentFramework.DataAwsccAuditmanagerAssessmentFrameworkConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessmentFramework.DataAwsccAuditmanagerAssessmentFrameworkConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessmentFramework.DataAwsccAuditmanagerAssessmentFrameworkConfig.property.id">id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessmentFramework.DataAwsccAuditmanagerAssessmentFrameworkConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessmentFramework.DataAwsccAuditmanagerAssessmentFrameworkConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessmentFramework.DataAwsccAuditmanagerAssessmentFrameworkConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessmentFramework.DataAwsccAuditmanagerAssessmentFrameworkConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessmentFramework.DataAwsccAuditmanagerAssessmentFrameworkConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessmentFramework.DataAwsccAuditmanagerAssessmentFrameworkConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessmentFramework.DataAwsccAuditmanagerAssessmentFrameworkConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessmentFramework.DataAwsccAuditmanagerAssessmentFrameworkConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/auditmanager_assessment_framework#id DataAwsccAuditmanagerAssessmentFramework#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccAuditmanagerAssessmentFrameworkControlSets <a name="DataAwsccAuditmanagerAssessmentFrameworkControlSets" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessmentFramework.DataAwsccAuditmanagerAssessmentFrameworkControlSets"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessmentFramework.DataAwsccAuditmanagerAssessmentFrameworkControlSets.Initializer"></a>

```typescript
import { dataAwsccAuditmanagerAssessmentFramework } from '@cdktn/provider-awscc'

const dataAwsccAuditmanagerAssessmentFrameworkControlSets: dataAwsccAuditmanagerAssessmentFramework.DataAwsccAuditmanagerAssessmentFrameworkControlSets = { ... }
```


### DataAwsccAuditmanagerAssessmentFrameworkControlSetsControls <a name="DataAwsccAuditmanagerAssessmentFrameworkControlSetsControls" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessmentFramework.DataAwsccAuditmanagerAssessmentFrameworkControlSetsControls"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessmentFramework.DataAwsccAuditmanagerAssessmentFrameworkControlSetsControls.Initializer"></a>

```typescript
import { dataAwsccAuditmanagerAssessmentFramework } from '@cdktn/provider-awscc'

const dataAwsccAuditmanagerAssessmentFrameworkControlSetsControls: dataAwsccAuditmanagerAssessmentFramework.DataAwsccAuditmanagerAssessmentFrameworkControlSetsControls = { ... }
```


### DataAwsccAuditmanagerAssessmentFrameworkTags <a name="DataAwsccAuditmanagerAssessmentFrameworkTags" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessmentFramework.DataAwsccAuditmanagerAssessmentFrameworkTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessmentFramework.DataAwsccAuditmanagerAssessmentFrameworkTags.Initializer"></a>

```typescript
import { dataAwsccAuditmanagerAssessmentFramework } from '@cdktn/provider-awscc'

const dataAwsccAuditmanagerAssessmentFrameworkTags: dataAwsccAuditmanagerAssessmentFramework.DataAwsccAuditmanagerAssessmentFrameworkTags = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccAuditmanagerAssessmentFrameworkControlSetsControlsList <a name="DataAwsccAuditmanagerAssessmentFrameworkControlSetsControlsList" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessmentFramework.DataAwsccAuditmanagerAssessmentFrameworkControlSetsControlsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessmentFramework.DataAwsccAuditmanagerAssessmentFrameworkControlSetsControlsList.Initializer"></a>

```typescript
import { dataAwsccAuditmanagerAssessmentFramework } from '@cdktn/provider-awscc'

new dataAwsccAuditmanagerAssessmentFramework.DataAwsccAuditmanagerAssessmentFrameworkControlSetsControlsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessmentFramework.DataAwsccAuditmanagerAssessmentFrameworkControlSetsControlsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessmentFramework.DataAwsccAuditmanagerAssessmentFrameworkControlSetsControlsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessmentFramework.DataAwsccAuditmanagerAssessmentFrameworkControlSetsControlsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessmentFramework.DataAwsccAuditmanagerAssessmentFrameworkControlSetsControlsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessmentFramework.DataAwsccAuditmanagerAssessmentFrameworkControlSetsControlsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessmentFramework.DataAwsccAuditmanagerAssessmentFrameworkControlSetsControlsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessmentFramework.DataAwsccAuditmanagerAssessmentFrameworkControlSetsControlsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessmentFramework.DataAwsccAuditmanagerAssessmentFrameworkControlSetsControlsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessmentFramework.DataAwsccAuditmanagerAssessmentFrameworkControlSetsControlsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessmentFramework.DataAwsccAuditmanagerAssessmentFrameworkControlSetsControlsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessmentFramework.DataAwsccAuditmanagerAssessmentFrameworkControlSetsControlsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessmentFramework.DataAwsccAuditmanagerAssessmentFrameworkControlSetsControlsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessmentFramework.DataAwsccAuditmanagerAssessmentFrameworkControlSetsControlsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessmentFramework.DataAwsccAuditmanagerAssessmentFrameworkControlSetsControlsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessmentFramework.DataAwsccAuditmanagerAssessmentFrameworkControlSetsControlsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessmentFramework.DataAwsccAuditmanagerAssessmentFrameworkControlSetsControlsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessmentFramework.DataAwsccAuditmanagerAssessmentFrameworkControlSetsControlsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessmentFramework.DataAwsccAuditmanagerAssessmentFrameworkControlSetsControlsList.get"></a>

```typescript
public get(index: number): DataAwsccAuditmanagerAssessmentFrameworkControlSetsControlsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessmentFramework.DataAwsccAuditmanagerAssessmentFrameworkControlSetsControlsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessmentFramework.DataAwsccAuditmanagerAssessmentFrameworkControlSetsControlsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessmentFramework.DataAwsccAuditmanagerAssessmentFrameworkControlSetsControlsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessmentFramework.DataAwsccAuditmanagerAssessmentFrameworkControlSetsControlsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessmentFramework.DataAwsccAuditmanagerAssessmentFrameworkControlSetsControlsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccAuditmanagerAssessmentFrameworkControlSetsControlsOutputReference <a name="DataAwsccAuditmanagerAssessmentFrameworkControlSetsControlsOutputReference" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessmentFramework.DataAwsccAuditmanagerAssessmentFrameworkControlSetsControlsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessmentFramework.DataAwsccAuditmanagerAssessmentFrameworkControlSetsControlsOutputReference.Initializer"></a>

```typescript
import { dataAwsccAuditmanagerAssessmentFramework } from '@cdktn/provider-awscc'

new dataAwsccAuditmanagerAssessmentFramework.DataAwsccAuditmanagerAssessmentFrameworkControlSetsControlsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessmentFramework.DataAwsccAuditmanagerAssessmentFrameworkControlSetsControlsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessmentFramework.DataAwsccAuditmanagerAssessmentFrameworkControlSetsControlsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessmentFramework.DataAwsccAuditmanagerAssessmentFrameworkControlSetsControlsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessmentFramework.DataAwsccAuditmanagerAssessmentFrameworkControlSetsControlsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessmentFramework.DataAwsccAuditmanagerAssessmentFrameworkControlSetsControlsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessmentFramework.DataAwsccAuditmanagerAssessmentFrameworkControlSetsControlsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessmentFramework.DataAwsccAuditmanagerAssessmentFrameworkControlSetsControlsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessmentFramework.DataAwsccAuditmanagerAssessmentFrameworkControlSetsControlsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessmentFramework.DataAwsccAuditmanagerAssessmentFrameworkControlSetsControlsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessmentFramework.DataAwsccAuditmanagerAssessmentFrameworkControlSetsControlsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessmentFramework.DataAwsccAuditmanagerAssessmentFrameworkControlSetsControlsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessmentFramework.DataAwsccAuditmanagerAssessmentFrameworkControlSetsControlsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessmentFramework.DataAwsccAuditmanagerAssessmentFrameworkControlSetsControlsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessmentFramework.DataAwsccAuditmanagerAssessmentFrameworkControlSetsControlsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessmentFramework.DataAwsccAuditmanagerAssessmentFrameworkControlSetsControlsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessmentFramework.DataAwsccAuditmanagerAssessmentFrameworkControlSetsControlsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessmentFramework.DataAwsccAuditmanagerAssessmentFrameworkControlSetsControlsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessmentFramework.DataAwsccAuditmanagerAssessmentFrameworkControlSetsControlsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessmentFramework.DataAwsccAuditmanagerAssessmentFrameworkControlSetsControlsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessmentFramework.DataAwsccAuditmanagerAssessmentFrameworkControlSetsControlsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessmentFramework.DataAwsccAuditmanagerAssessmentFrameworkControlSetsControlsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessmentFramework.DataAwsccAuditmanagerAssessmentFrameworkControlSetsControlsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessmentFramework.DataAwsccAuditmanagerAssessmentFrameworkControlSetsControlsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessmentFramework.DataAwsccAuditmanagerAssessmentFrameworkControlSetsControlsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessmentFramework.DataAwsccAuditmanagerAssessmentFrameworkControlSetsControlsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessmentFramework.DataAwsccAuditmanagerAssessmentFrameworkControlSetsControlsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessmentFramework.DataAwsccAuditmanagerAssessmentFrameworkControlSetsControlsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessmentFramework.DataAwsccAuditmanagerAssessmentFrameworkControlSetsControlsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessmentFramework.DataAwsccAuditmanagerAssessmentFrameworkControlSetsControlsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessmentFramework.DataAwsccAuditmanagerAssessmentFrameworkControlSetsControlsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessmentFramework.DataAwsccAuditmanagerAssessmentFrameworkControlSetsControlsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessmentFramework.DataAwsccAuditmanagerAssessmentFrameworkControlSetsControlsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessmentFramework.DataAwsccAuditmanagerAssessmentFrameworkControlSetsControlsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessmentFramework.DataAwsccAuditmanagerAssessmentFrameworkControlSetsControlsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessmentFramework.DataAwsccAuditmanagerAssessmentFrameworkControlSetsControlsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessmentFramework.DataAwsccAuditmanagerAssessmentFrameworkControlSetsControlsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessmentFramework.DataAwsccAuditmanagerAssessmentFrameworkControlSetsControlsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessmentFramework.DataAwsccAuditmanagerAssessmentFrameworkControlSetsControlsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessmentFramework.DataAwsccAuditmanagerAssessmentFrameworkControlSetsControlsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessmentFramework.DataAwsccAuditmanagerAssessmentFrameworkControlSetsControlsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessmentFramework.DataAwsccAuditmanagerAssessmentFrameworkControlSetsControlsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessmentFramework.DataAwsccAuditmanagerAssessmentFrameworkControlSetsControlsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessmentFramework.DataAwsccAuditmanagerAssessmentFrameworkControlSetsControlsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessmentFramework.DataAwsccAuditmanagerAssessmentFrameworkControlSetsControlsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessmentFramework.DataAwsccAuditmanagerAssessmentFrameworkControlSetsControlsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessmentFramework.DataAwsccAuditmanagerAssessmentFrameworkControlSetsControlsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessmentFramework.DataAwsccAuditmanagerAssessmentFrameworkControlSetsControlsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessmentFramework.DataAwsccAuditmanagerAssessmentFrameworkControlSetsControlsOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessmentFramework.DataAwsccAuditmanagerAssessmentFrameworkControlSetsControlsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessmentFramework.DataAwsccAuditmanagerAssessmentFrameworkControlSetsControls">DataAwsccAuditmanagerAssessmentFrameworkControlSetsControls</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessmentFramework.DataAwsccAuditmanagerAssessmentFrameworkControlSetsControlsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessmentFramework.DataAwsccAuditmanagerAssessmentFrameworkControlSetsControlsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessmentFramework.DataAwsccAuditmanagerAssessmentFrameworkControlSetsControlsOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessmentFramework.DataAwsccAuditmanagerAssessmentFrameworkControlSetsControlsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccAuditmanagerAssessmentFrameworkControlSetsControls;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessmentFramework.DataAwsccAuditmanagerAssessmentFrameworkControlSetsControls">DataAwsccAuditmanagerAssessmentFrameworkControlSetsControls</a>

---


### DataAwsccAuditmanagerAssessmentFrameworkControlSetsList <a name="DataAwsccAuditmanagerAssessmentFrameworkControlSetsList" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessmentFramework.DataAwsccAuditmanagerAssessmentFrameworkControlSetsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessmentFramework.DataAwsccAuditmanagerAssessmentFrameworkControlSetsList.Initializer"></a>

```typescript
import { dataAwsccAuditmanagerAssessmentFramework } from '@cdktn/provider-awscc'

new dataAwsccAuditmanagerAssessmentFramework.DataAwsccAuditmanagerAssessmentFrameworkControlSetsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessmentFramework.DataAwsccAuditmanagerAssessmentFrameworkControlSetsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessmentFramework.DataAwsccAuditmanagerAssessmentFrameworkControlSetsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessmentFramework.DataAwsccAuditmanagerAssessmentFrameworkControlSetsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessmentFramework.DataAwsccAuditmanagerAssessmentFrameworkControlSetsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessmentFramework.DataAwsccAuditmanagerAssessmentFrameworkControlSetsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessmentFramework.DataAwsccAuditmanagerAssessmentFrameworkControlSetsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessmentFramework.DataAwsccAuditmanagerAssessmentFrameworkControlSetsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessmentFramework.DataAwsccAuditmanagerAssessmentFrameworkControlSetsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessmentFramework.DataAwsccAuditmanagerAssessmentFrameworkControlSetsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessmentFramework.DataAwsccAuditmanagerAssessmentFrameworkControlSetsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessmentFramework.DataAwsccAuditmanagerAssessmentFrameworkControlSetsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessmentFramework.DataAwsccAuditmanagerAssessmentFrameworkControlSetsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessmentFramework.DataAwsccAuditmanagerAssessmentFrameworkControlSetsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessmentFramework.DataAwsccAuditmanagerAssessmentFrameworkControlSetsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessmentFramework.DataAwsccAuditmanagerAssessmentFrameworkControlSetsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessmentFramework.DataAwsccAuditmanagerAssessmentFrameworkControlSetsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessmentFramework.DataAwsccAuditmanagerAssessmentFrameworkControlSetsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessmentFramework.DataAwsccAuditmanagerAssessmentFrameworkControlSetsList.get"></a>

```typescript
public get(index: number): DataAwsccAuditmanagerAssessmentFrameworkControlSetsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessmentFramework.DataAwsccAuditmanagerAssessmentFrameworkControlSetsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessmentFramework.DataAwsccAuditmanagerAssessmentFrameworkControlSetsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessmentFramework.DataAwsccAuditmanagerAssessmentFrameworkControlSetsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessmentFramework.DataAwsccAuditmanagerAssessmentFrameworkControlSetsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessmentFramework.DataAwsccAuditmanagerAssessmentFrameworkControlSetsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccAuditmanagerAssessmentFrameworkControlSetsOutputReference <a name="DataAwsccAuditmanagerAssessmentFrameworkControlSetsOutputReference" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessmentFramework.DataAwsccAuditmanagerAssessmentFrameworkControlSetsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessmentFramework.DataAwsccAuditmanagerAssessmentFrameworkControlSetsOutputReference.Initializer"></a>

```typescript
import { dataAwsccAuditmanagerAssessmentFramework } from '@cdktn/provider-awscc'

new dataAwsccAuditmanagerAssessmentFramework.DataAwsccAuditmanagerAssessmentFrameworkControlSetsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessmentFramework.DataAwsccAuditmanagerAssessmentFrameworkControlSetsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessmentFramework.DataAwsccAuditmanagerAssessmentFrameworkControlSetsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessmentFramework.DataAwsccAuditmanagerAssessmentFrameworkControlSetsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessmentFramework.DataAwsccAuditmanagerAssessmentFrameworkControlSetsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessmentFramework.DataAwsccAuditmanagerAssessmentFrameworkControlSetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessmentFramework.DataAwsccAuditmanagerAssessmentFrameworkControlSetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessmentFramework.DataAwsccAuditmanagerAssessmentFrameworkControlSetsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessmentFramework.DataAwsccAuditmanagerAssessmentFrameworkControlSetsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessmentFramework.DataAwsccAuditmanagerAssessmentFrameworkControlSetsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessmentFramework.DataAwsccAuditmanagerAssessmentFrameworkControlSetsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessmentFramework.DataAwsccAuditmanagerAssessmentFrameworkControlSetsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessmentFramework.DataAwsccAuditmanagerAssessmentFrameworkControlSetsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessmentFramework.DataAwsccAuditmanagerAssessmentFrameworkControlSetsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessmentFramework.DataAwsccAuditmanagerAssessmentFrameworkControlSetsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessmentFramework.DataAwsccAuditmanagerAssessmentFrameworkControlSetsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessmentFramework.DataAwsccAuditmanagerAssessmentFrameworkControlSetsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessmentFramework.DataAwsccAuditmanagerAssessmentFrameworkControlSetsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessmentFramework.DataAwsccAuditmanagerAssessmentFrameworkControlSetsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessmentFramework.DataAwsccAuditmanagerAssessmentFrameworkControlSetsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessmentFramework.DataAwsccAuditmanagerAssessmentFrameworkControlSetsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessmentFramework.DataAwsccAuditmanagerAssessmentFrameworkControlSetsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessmentFramework.DataAwsccAuditmanagerAssessmentFrameworkControlSetsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessmentFramework.DataAwsccAuditmanagerAssessmentFrameworkControlSetsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessmentFramework.DataAwsccAuditmanagerAssessmentFrameworkControlSetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessmentFramework.DataAwsccAuditmanagerAssessmentFrameworkControlSetsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessmentFramework.DataAwsccAuditmanagerAssessmentFrameworkControlSetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessmentFramework.DataAwsccAuditmanagerAssessmentFrameworkControlSetsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessmentFramework.DataAwsccAuditmanagerAssessmentFrameworkControlSetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessmentFramework.DataAwsccAuditmanagerAssessmentFrameworkControlSetsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessmentFramework.DataAwsccAuditmanagerAssessmentFrameworkControlSetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessmentFramework.DataAwsccAuditmanagerAssessmentFrameworkControlSetsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessmentFramework.DataAwsccAuditmanagerAssessmentFrameworkControlSetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessmentFramework.DataAwsccAuditmanagerAssessmentFrameworkControlSetsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessmentFramework.DataAwsccAuditmanagerAssessmentFrameworkControlSetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessmentFramework.DataAwsccAuditmanagerAssessmentFrameworkControlSetsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessmentFramework.DataAwsccAuditmanagerAssessmentFrameworkControlSetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessmentFramework.DataAwsccAuditmanagerAssessmentFrameworkControlSetsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessmentFramework.DataAwsccAuditmanagerAssessmentFrameworkControlSetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessmentFramework.DataAwsccAuditmanagerAssessmentFrameworkControlSetsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessmentFramework.DataAwsccAuditmanagerAssessmentFrameworkControlSetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessmentFramework.DataAwsccAuditmanagerAssessmentFrameworkControlSetsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessmentFramework.DataAwsccAuditmanagerAssessmentFrameworkControlSetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessmentFramework.DataAwsccAuditmanagerAssessmentFrameworkControlSetsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessmentFramework.DataAwsccAuditmanagerAssessmentFrameworkControlSetsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessmentFramework.DataAwsccAuditmanagerAssessmentFrameworkControlSetsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessmentFramework.DataAwsccAuditmanagerAssessmentFrameworkControlSetsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessmentFramework.DataAwsccAuditmanagerAssessmentFrameworkControlSetsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessmentFramework.DataAwsccAuditmanagerAssessmentFrameworkControlSetsOutputReference.property.controls">controls</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessmentFramework.DataAwsccAuditmanagerAssessmentFrameworkControlSetsControlsList">DataAwsccAuditmanagerAssessmentFrameworkControlSetsControlsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessmentFramework.DataAwsccAuditmanagerAssessmentFrameworkControlSetsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessmentFramework.DataAwsccAuditmanagerAssessmentFrameworkControlSetsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessmentFramework.DataAwsccAuditmanagerAssessmentFrameworkControlSets">DataAwsccAuditmanagerAssessmentFrameworkControlSets</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessmentFramework.DataAwsccAuditmanagerAssessmentFrameworkControlSetsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessmentFramework.DataAwsccAuditmanagerAssessmentFrameworkControlSetsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `controls`<sup>Required</sup> <a name="controls" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessmentFramework.DataAwsccAuditmanagerAssessmentFrameworkControlSetsOutputReference.property.controls"></a>

```typescript
public readonly controls: DataAwsccAuditmanagerAssessmentFrameworkControlSetsControlsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessmentFramework.DataAwsccAuditmanagerAssessmentFrameworkControlSetsControlsList">DataAwsccAuditmanagerAssessmentFrameworkControlSetsControlsList</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessmentFramework.DataAwsccAuditmanagerAssessmentFrameworkControlSetsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessmentFramework.DataAwsccAuditmanagerAssessmentFrameworkControlSetsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccAuditmanagerAssessmentFrameworkControlSets;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessmentFramework.DataAwsccAuditmanagerAssessmentFrameworkControlSets">DataAwsccAuditmanagerAssessmentFrameworkControlSets</a>

---


### DataAwsccAuditmanagerAssessmentFrameworkTagsList <a name="DataAwsccAuditmanagerAssessmentFrameworkTagsList" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessmentFramework.DataAwsccAuditmanagerAssessmentFrameworkTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessmentFramework.DataAwsccAuditmanagerAssessmentFrameworkTagsList.Initializer"></a>

```typescript
import { dataAwsccAuditmanagerAssessmentFramework } from '@cdktn/provider-awscc'

new dataAwsccAuditmanagerAssessmentFramework.DataAwsccAuditmanagerAssessmentFrameworkTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessmentFramework.DataAwsccAuditmanagerAssessmentFrameworkTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessmentFramework.DataAwsccAuditmanagerAssessmentFrameworkTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessmentFramework.DataAwsccAuditmanagerAssessmentFrameworkTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessmentFramework.DataAwsccAuditmanagerAssessmentFrameworkTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessmentFramework.DataAwsccAuditmanagerAssessmentFrameworkTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessmentFramework.DataAwsccAuditmanagerAssessmentFrameworkTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessmentFramework.DataAwsccAuditmanagerAssessmentFrameworkTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessmentFramework.DataAwsccAuditmanagerAssessmentFrameworkTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessmentFramework.DataAwsccAuditmanagerAssessmentFrameworkTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessmentFramework.DataAwsccAuditmanagerAssessmentFrameworkTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessmentFramework.DataAwsccAuditmanagerAssessmentFrameworkTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessmentFramework.DataAwsccAuditmanagerAssessmentFrameworkTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessmentFramework.DataAwsccAuditmanagerAssessmentFrameworkTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessmentFramework.DataAwsccAuditmanagerAssessmentFrameworkTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessmentFramework.DataAwsccAuditmanagerAssessmentFrameworkTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessmentFramework.DataAwsccAuditmanagerAssessmentFrameworkTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessmentFramework.DataAwsccAuditmanagerAssessmentFrameworkTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessmentFramework.DataAwsccAuditmanagerAssessmentFrameworkTagsList.get"></a>

```typescript
public get(index: number): DataAwsccAuditmanagerAssessmentFrameworkTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessmentFramework.DataAwsccAuditmanagerAssessmentFrameworkTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessmentFramework.DataAwsccAuditmanagerAssessmentFrameworkTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessmentFramework.DataAwsccAuditmanagerAssessmentFrameworkTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessmentFramework.DataAwsccAuditmanagerAssessmentFrameworkTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessmentFramework.DataAwsccAuditmanagerAssessmentFrameworkTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccAuditmanagerAssessmentFrameworkTagsOutputReference <a name="DataAwsccAuditmanagerAssessmentFrameworkTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessmentFramework.DataAwsccAuditmanagerAssessmentFrameworkTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessmentFramework.DataAwsccAuditmanagerAssessmentFrameworkTagsOutputReference.Initializer"></a>

```typescript
import { dataAwsccAuditmanagerAssessmentFramework } from '@cdktn/provider-awscc'

new dataAwsccAuditmanagerAssessmentFramework.DataAwsccAuditmanagerAssessmentFrameworkTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessmentFramework.DataAwsccAuditmanagerAssessmentFrameworkTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessmentFramework.DataAwsccAuditmanagerAssessmentFrameworkTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessmentFramework.DataAwsccAuditmanagerAssessmentFrameworkTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessmentFramework.DataAwsccAuditmanagerAssessmentFrameworkTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessmentFramework.DataAwsccAuditmanagerAssessmentFrameworkTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessmentFramework.DataAwsccAuditmanagerAssessmentFrameworkTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessmentFramework.DataAwsccAuditmanagerAssessmentFrameworkTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessmentFramework.DataAwsccAuditmanagerAssessmentFrameworkTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessmentFramework.DataAwsccAuditmanagerAssessmentFrameworkTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessmentFramework.DataAwsccAuditmanagerAssessmentFrameworkTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessmentFramework.DataAwsccAuditmanagerAssessmentFrameworkTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessmentFramework.DataAwsccAuditmanagerAssessmentFrameworkTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessmentFramework.DataAwsccAuditmanagerAssessmentFrameworkTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessmentFramework.DataAwsccAuditmanagerAssessmentFrameworkTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessmentFramework.DataAwsccAuditmanagerAssessmentFrameworkTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessmentFramework.DataAwsccAuditmanagerAssessmentFrameworkTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessmentFramework.DataAwsccAuditmanagerAssessmentFrameworkTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessmentFramework.DataAwsccAuditmanagerAssessmentFrameworkTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessmentFramework.DataAwsccAuditmanagerAssessmentFrameworkTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessmentFramework.DataAwsccAuditmanagerAssessmentFrameworkTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessmentFramework.DataAwsccAuditmanagerAssessmentFrameworkTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessmentFramework.DataAwsccAuditmanagerAssessmentFrameworkTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessmentFramework.DataAwsccAuditmanagerAssessmentFrameworkTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessmentFramework.DataAwsccAuditmanagerAssessmentFrameworkTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessmentFramework.DataAwsccAuditmanagerAssessmentFrameworkTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessmentFramework.DataAwsccAuditmanagerAssessmentFrameworkTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessmentFramework.DataAwsccAuditmanagerAssessmentFrameworkTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessmentFramework.DataAwsccAuditmanagerAssessmentFrameworkTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessmentFramework.DataAwsccAuditmanagerAssessmentFrameworkTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessmentFramework.DataAwsccAuditmanagerAssessmentFrameworkTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessmentFramework.DataAwsccAuditmanagerAssessmentFrameworkTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessmentFramework.DataAwsccAuditmanagerAssessmentFrameworkTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessmentFramework.DataAwsccAuditmanagerAssessmentFrameworkTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessmentFramework.DataAwsccAuditmanagerAssessmentFrameworkTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessmentFramework.DataAwsccAuditmanagerAssessmentFrameworkTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessmentFramework.DataAwsccAuditmanagerAssessmentFrameworkTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessmentFramework.DataAwsccAuditmanagerAssessmentFrameworkTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessmentFramework.DataAwsccAuditmanagerAssessmentFrameworkTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessmentFramework.DataAwsccAuditmanagerAssessmentFrameworkTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessmentFramework.DataAwsccAuditmanagerAssessmentFrameworkTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessmentFramework.DataAwsccAuditmanagerAssessmentFrameworkTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessmentFramework.DataAwsccAuditmanagerAssessmentFrameworkTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessmentFramework.DataAwsccAuditmanagerAssessmentFrameworkTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessmentFramework.DataAwsccAuditmanagerAssessmentFrameworkTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessmentFramework.DataAwsccAuditmanagerAssessmentFrameworkTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessmentFramework.DataAwsccAuditmanagerAssessmentFrameworkTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessmentFramework.DataAwsccAuditmanagerAssessmentFrameworkTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessmentFramework.DataAwsccAuditmanagerAssessmentFrameworkTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessmentFramework.DataAwsccAuditmanagerAssessmentFrameworkTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessmentFramework.DataAwsccAuditmanagerAssessmentFrameworkTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessmentFramework.DataAwsccAuditmanagerAssessmentFrameworkTags">DataAwsccAuditmanagerAssessmentFrameworkTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessmentFramework.DataAwsccAuditmanagerAssessmentFrameworkTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessmentFramework.DataAwsccAuditmanagerAssessmentFrameworkTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessmentFramework.DataAwsccAuditmanagerAssessmentFrameworkTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessmentFramework.DataAwsccAuditmanagerAssessmentFrameworkTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccAuditmanagerAssessmentFramework.DataAwsccAuditmanagerAssessmentFrameworkTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccAuditmanagerAssessmentFrameworkTags;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAuditmanagerAssessmentFramework.DataAwsccAuditmanagerAssessmentFrameworkTags">DataAwsccAuditmanagerAssessmentFrameworkTags</a>

---




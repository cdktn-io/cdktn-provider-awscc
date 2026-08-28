# `dataAwsccResiliencehubApp` Submodule <a name="`dataAwsccResiliencehubApp` Submodule" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccResiliencehubApp <a name="DataAwsccResiliencehubApp" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubApp"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/resiliencehub_app awscc_resiliencehub_app}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubApp.Initializer"></a>

```typescript
import { dataAwsccResiliencehubApp } from '@cdktn/provider-awscc'

new dataAwsccResiliencehubApp.DataAwsccResiliencehubApp(scope: Construct, id: string, config: DataAwsccResiliencehubAppConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubApp.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubApp.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubApp.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppConfig">DataAwsccResiliencehubAppConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubApp.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubApp.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubApp.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppConfig">DataAwsccResiliencehubAppConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubApp.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubApp.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubApp.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubApp.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubApp.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubApp.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubApp.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubApp.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubApp.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubApp.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubApp.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubApp.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubApp.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubApp.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubApp.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubApp.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubApp.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubApp.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubApp.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubApp.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubApp.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubApp.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubApp.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubApp.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubApp.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubApp.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubApp.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubApp.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubApp.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubApp.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubApp.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubApp.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubApp.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubApp.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubApp.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubApp.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubApp.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubApp.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubApp.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubApp.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubApp.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubApp.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubApp.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubApp.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubApp.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubApp.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubApp.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubApp.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubApp.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubApp.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubApp.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubApp.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubApp.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubApp.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccResiliencehubApp resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubApp.isConstruct"></a>

```typescript
import { dataAwsccResiliencehubApp } from '@cdktn/provider-awscc'

dataAwsccResiliencehubApp.DataAwsccResiliencehubApp.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubApp.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubApp.isTerraformElement"></a>

```typescript
import { dataAwsccResiliencehubApp } from '@cdktn/provider-awscc'

dataAwsccResiliencehubApp.DataAwsccResiliencehubApp.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubApp.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubApp.isTerraformDataSource"></a>

```typescript
import { dataAwsccResiliencehubApp } from '@cdktn/provider-awscc'

dataAwsccResiliencehubApp.DataAwsccResiliencehubApp.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubApp.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubApp.generateConfigForImport"></a>

```typescript
import { dataAwsccResiliencehubApp } from '@cdktn/provider-awscc'

dataAwsccResiliencehubApp.DataAwsccResiliencehubApp.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAwsccResiliencehubApp resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubApp.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubApp.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccResiliencehubApp to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubApp.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccResiliencehubApp that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/resiliencehub_app#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubApp.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccResiliencehubApp to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubApp.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubApp.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubApp.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubApp.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubApp.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubApp.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubApp.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubApp.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubApp.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubApp.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubApp.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubApp.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubApp.property.appArn">appArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubApp.property.appAssessmentSchedule">appAssessmentSchedule</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubApp.property.appTemplateBody">appTemplateBody</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubApp.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubApp.property.driftStatus">driftStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubApp.property.eventSubscriptions">eventSubscriptions</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppEventSubscriptionsList">DataAwsccResiliencehubAppEventSubscriptionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubApp.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubApp.property.permissionModel">permissionModel</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppPermissionModelOutputReference">DataAwsccResiliencehubAppPermissionModelOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubApp.property.resiliencyPolicyArn">resiliencyPolicyArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubApp.property.resourceMappings">resourceMappings</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppResourceMappingsList">DataAwsccResiliencehubAppResourceMappingsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubApp.property.tags">tags</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubApp.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubApp.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubApp.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubApp.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubApp.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubApp.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubApp.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubApp.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubApp.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubApp.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubApp.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubApp.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubApp.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubApp.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `appArn`<sup>Required</sup> <a name="appArn" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubApp.property.appArn"></a>

```typescript
public readonly appArn: string;
```

- *Type:* string

---

##### `appAssessmentSchedule`<sup>Required</sup> <a name="appAssessmentSchedule" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubApp.property.appAssessmentSchedule"></a>

```typescript
public readonly appAssessmentSchedule: string;
```

- *Type:* string

---

##### `appTemplateBody`<sup>Required</sup> <a name="appTemplateBody" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubApp.property.appTemplateBody"></a>

```typescript
public readonly appTemplateBody: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubApp.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `driftStatus`<sup>Required</sup> <a name="driftStatus" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubApp.property.driftStatus"></a>

```typescript
public readonly driftStatus: string;
```

- *Type:* string

---

##### `eventSubscriptions`<sup>Required</sup> <a name="eventSubscriptions" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubApp.property.eventSubscriptions"></a>

```typescript
public readonly eventSubscriptions: DataAwsccResiliencehubAppEventSubscriptionsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppEventSubscriptionsList">DataAwsccResiliencehubAppEventSubscriptionsList</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubApp.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `permissionModel`<sup>Required</sup> <a name="permissionModel" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubApp.property.permissionModel"></a>

```typescript
public readonly permissionModel: DataAwsccResiliencehubAppPermissionModelOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppPermissionModelOutputReference">DataAwsccResiliencehubAppPermissionModelOutputReference</a>

---

##### `resiliencyPolicyArn`<sup>Required</sup> <a name="resiliencyPolicyArn" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubApp.property.resiliencyPolicyArn"></a>

```typescript
public readonly resiliencyPolicyArn: string;
```

- *Type:* string

---

##### `resourceMappings`<sup>Required</sup> <a name="resourceMappings" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubApp.property.resourceMappings"></a>

```typescript
public readonly resourceMappings: DataAwsccResiliencehubAppResourceMappingsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppResourceMappingsList">DataAwsccResiliencehubAppResourceMappingsList</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubApp.property.tags"></a>

```typescript
public readonly tags: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubApp.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubApp.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubApp.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubApp.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccResiliencehubAppConfig <a name="DataAwsccResiliencehubAppConfig" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppConfig.Initializer"></a>

```typescript
import { dataAwsccResiliencehubApp } from '@cdktn/provider-awscc'

const dataAwsccResiliencehubAppConfig: dataAwsccResiliencehubApp.DataAwsccResiliencehubAppConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppConfig.property.id">id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/resiliencehub_app#id DataAwsccResiliencehubApp#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccResiliencehubAppEventSubscriptions <a name="DataAwsccResiliencehubAppEventSubscriptions" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppEventSubscriptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppEventSubscriptions.Initializer"></a>

```typescript
import { dataAwsccResiliencehubApp } from '@cdktn/provider-awscc'

const dataAwsccResiliencehubAppEventSubscriptions: dataAwsccResiliencehubApp.DataAwsccResiliencehubAppEventSubscriptions = { ... }
```


### DataAwsccResiliencehubAppPermissionModel <a name="DataAwsccResiliencehubAppPermissionModel" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppPermissionModel"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppPermissionModel.Initializer"></a>

```typescript
import { dataAwsccResiliencehubApp } from '@cdktn/provider-awscc'

const dataAwsccResiliencehubAppPermissionModel: dataAwsccResiliencehubApp.DataAwsccResiliencehubAppPermissionModel = { ... }
```


### DataAwsccResiliencehubAppResourceMappings <a name="DataAwsccResiliencehubAppResourceMappings" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppResourceMappings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppResourceMappings.Initializer"></a>

```typescript
import { dataAwsccResiliencehubApp } from '@cdktn/provider-awscc'

const dataAwsccResiliencehubAppResourceMappings: dataAwsccResiliencehubApp.DataAwsccResiliencehubAppResourceMappings = { ... }
```


### DataAwsccResiliencehubAppResourceMappingsPhysicalResourceId <a name="DataAwsccResiliencehubAppResourceMappingsPhysicalResourceId" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppResourceMappingsPhysicalResourceId"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppResourceMappingsPhysicalResourceId.Initializer"></a>

```typescript
import { dataAwsccResiliencehubApp } from '@cdktn/provider-awscc'

const dataAwsccResiliencehubAppResourceMappingsPhysicalResourceId: dataAwsccResiliencehubApp.DataAwsccResiliencehubAppResourceMappingsPhysicalResourceId = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccResiliencehubAppEventSubscriptionsList <a name="DataAwsccResiliencehubAppEventSubscriptionsList" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppEventSubscriptionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppEventSubscriptionsList.Initializer"></a>

```typescript
import { dataAwsccResiliencehubApp } from '@cdktn/provider-awscc'

new dataAwsccResiliencehubApp.DataAwsccResiliencehubAppEventSubscriptionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppEventSubscriptionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppEventSubscriptionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppEventSubscriptionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppEventSubscriptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppEventSubscriptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppEventSubscriptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppEventSubscriptionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppEventSubscriptionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppEventSubscriptionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppEventSubscriptionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppEventSubscriptionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppEventSubscriptionsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppEventSubscriptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppEventSubscriptionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppEventSubscriptionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppEventSubscriptionsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppEventSubscriptionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppEventSubscriptionsList.get"></a>

```typescript
public get(index: number): DataAwsccResiliencehubAppEventSubscriptionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppEventSubscriptionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppEventSubscriptionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppEventSubscriptionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppEventSubscriptionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppEventSubscriptionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccResiliencehubAppEventSubscriptionsOutputReference <a name="DataAwsccResiliencehubAppEventSubscriptionsOutputReference" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppEventSubscriptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppEventSubscriptionsOutputReference.Initializer"></a>

```typescript
import { dataAwsccResiliencehubApp } from '@cdktn/provider-awscc'

new dataAwsccResiliencehubApp.DataAwsccResiliencehubAppEventSubscriptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppEventSubscriptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppEventSubscriptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppEventSubscriptionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppEventSubscriptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppEventSubscriptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppEventSubscriptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppEventSubscriptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppEventSubscriptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppEventSubscriptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppEventSubscriptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppEventSubscriptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppEventSubscriptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppEventSubscriptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppEventSubscriptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppEventSubscriptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppEventSubscriptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppEventSubscriptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppEventSubscriptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppEventSubscriptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppEventSubscriptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppEventSubscriptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppEventSubscriptionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppEventSubscriptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppEventSubscriptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppEventSubscriptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppEventSubscriptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppEventSubscriptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppEventSubscriptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppEventSubscriptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppEventSubscriptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppEventSubscriptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppEventSubscriptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppEventSubscriptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppEventSubscriptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppEventSubscriptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppEventSubscriptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppEventSubscriptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppEventSubscriptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppEventSubscriptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppEventSubscriptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppEventSubscriptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppEventSubscriptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppEventSubscriptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppEventSubscriptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppEventSubscriptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppEventSubscriptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppEventSubscriptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppEventSubscriptionsOutputReference.property.eventType">eventType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppEventSubscriptionsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppEventSubscriptionsOutputReference.property.snsTopicArn">snsTopicArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppEventSubscriptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppEventSubscriptions">DataAwsccResiliencehubAppEventSubscriptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppEventSubscriptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppEventSubscriptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `eventType`<sup>Required</sup> <a name="eventType" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppEventSubscriptionsOutputReference.property.eventType"></a>

```typescript
public readonly eventType: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppEventSubscriptionsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `snsTopicArn`<sup>Required</sup> <a name="snsTopicArn" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppEventSubscriptionsOutputReference.property.snsTopicArn"></a>

```typescript
public readonly snsTopicArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppEventSubscriptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccResiliencehubAppEventSubscriptions;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppEventSubscriptions">DataAwsccResiliencehubAppEventSubscriptions</a>

---


### DataAwsccResiliencehubAppPermissionModelOutputReference <a name="DataAwsccResiliencehubAppPermissionModelOutputReference" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppPermissionModelOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppPermissionModelOutputReference.Initializer"></a>

```typescript
import { dataAwsccResiliencehubApp } from '@cdktn/provider-awscc'

new dataAwsccResiliencehubApp.DataAwsccResiliencehubAppPermissionModelOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppPermissionModelOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppPermissionModelOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppPermissionModelOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppPermissionModelOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppPermissionModelOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppPermissionModelOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppPermissionModelOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppPermissionModelOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppPermissionModelOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppPermissionModelOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppPermissionModelOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppPermissionModelOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppPermissionModelOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppPermissionModelOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppPermissionModelOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppPermissionModelOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppPermissionModelOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppPermissionModelOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppPermissionModelOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppPermissionModelOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppPermissionModelOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppPermissionModelOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppPermissionModelOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppPermissionModelOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppPermissionModelOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppPermissionModelOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppPermissionModelOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppPermissionModelOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppPermissionModelOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppPermissionModelOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppPermissionModelOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppPermissionModelOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppPermissionModelOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppPermissionModelOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppPermissionModelOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppPermissionModelOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppPermissionModelOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppPermissionModelOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppPermissionModelOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppPermissionModelOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppPermissionModelOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppPermissionModelOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppPermissionModelOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppPermissionModelOutputReference.property.crossAccountRoleArns">crossAccountRoleArns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppPermissionModelOutputReference.property.invokerRoleName">invokerRoleName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppPermissionModelOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppPermissionModelOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppPermissionModel">DataAwsccResiliencehubAppPermissionModel</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppPermissionModelOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppPermissionModelOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `crossAccountRoleArns`<sup>Required</sup> <a name="crossAccountRoleArns" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppPermissionModelOutputReference.property.crossAccountRoleArns"></a>

```typescript
public readonly crossAccountRoleArns: string[];
```

- *Type:* string[]

---

##### `invokerRoleName`<sup>Required</sup> <a name="invokerRoleName" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppPermissionModelOutputReference.property.invokerRoleName"></a>

```typescript
public readonly invokerRoleName: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppPermissionModelOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppPermissionModelOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccResiliencehubAppPermissionModel;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppPermissionModel">DataAwsccResiliencehubAppPermissionModel</a>

---


### DataAwsccResiliencehubAppResourceMappingsList <a name="DataAwsccResiliencehubAppResourceMappingsList" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppResourceMappingsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppResourceMappingsList.Initializer"></a>

```typescript
import { dataAwsccResiliencehubApp } from '@cdktn/provider-awscc'

new dataAwsccResiliencehubApp.DataAwsccResiliencehubAppResourceMappingsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppResourceMappingsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppResourceMappingsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppResourceMappingsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppResourceMappingsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppResourceMappingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppResourceMappingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppResourceMappingsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppResourceMappingsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppResourceMappingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppResourceMappingsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppResourceMappingsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppResourceMappingsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppResourceMappingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppResourceMappingsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppResourceMappingsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppResourceMappingsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppResourceMappingsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppResourceMappingsList.get"></a>

```typescript
public get(index: number): DataAwsccResiliencehubAppResourceMappingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppResourceMappingsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppResourceMappingsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppResourceMappingsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppResourceMappingsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppResourceMappingsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccResiliencehubAppResourceMappingsOutputReference <a name="DataAwsccResiliencehubAppResourceMappingsOutputReference" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppResourceMappingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppResourceMappingsOutputReference.Initializer"></a>

```typescript
import { dataAwsccResiliencehubApp } from '@cdktn/provider-awscc'

new dataAwsccResiliencehubApp.DataAwsccResiliencehubAppResourceMappingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppResourceMappingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppResourceMappingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppResourceMappingsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppResourceMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppResourceMappingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppResourceMappingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppResourceMappingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppResourceMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppResourceMappingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppResourceMappingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppResourceMappingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppResourceMappingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppResourceMappingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppResourceMappingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppResourceMappingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppResourceMappingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppResourceMappingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppResourceMappingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppResourceMappingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppResourceMappingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppResourceMappingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppResourceMappingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppResourceMappingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppResourceMappingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppResourceMappingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppResourceMappingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppResourceMappingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppResourceMappingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppResourceMappingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppResourceMappingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppResourceMappingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppResourceMappingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppResourceMappingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppResourceMappingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppResourceMappingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppResourceMappingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppResourceMappingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppResourceMappingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppResourceMappingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppResourceMappingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppResourceMappingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppResourceMappingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppResourceMappingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppResourceMappingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppResourceMappingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppResourceMappingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppResourceMappingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppResourceMappingsOutputReference.property.eksSourceName">eksSourceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppResourceMappingsOutputReference.property.logicalStackName">logicalStackName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppResourceMappingsOutputReference.property.mappingType">mappingType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppResourceMappingsOutputReference.property.physicalResourceId">physicalResourceId</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference">DataAwsccResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppResourceMappingsOutputReference.property.resourceName">resourceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppResourceMappingsOutputReference.property.terraformSourceName">terraformSourceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppResourceMappingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppResourceMappings">DataAwsccResiliencehubAppResourceMappings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppResourceMappingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppResourceMappingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `eksSourceName`<sup>Required</sup> <a name="eksSourceName" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppResourceMappingsOutputReference.property.eksSourceName"></a>

```typescript
public readonly eksSourceName: string;
```

- *Type:* string

---

##### `logicalStackName`<sup>Required</sup> <a name="logicalStackName" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppResourceMappingsOutputReference.property.logicalStackName"></a>

```typescript
public readonly logicalStackName: string;
```

- *Type:* string

---

##### `mappingType`<sup>Required</sup> <a name="mappingType" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppResourceMappingsOutputReference.property.mappingType"></a>

```typescript
public readonly mappingType: string;
```

- *Type:* string

---

##### `physicalResourceId`<sup>Required</sup> <a name="physicalResourceId" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppResourceMappingsOutputReference.property.physicalResourceId"></a>

```typescript
public readonly physicalResourceId: DataAwsccResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference">DataAwsccResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference</a>

---

##### `resourceName`<sup>Required</sup> <a name="resourceName" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppResourceMappingsOutputReference.property.resourceName"></a>

```typescript
public readonly resourceName: string;
```

- *Type:* string

---

##### `terraformSourceName`<sup>Required</sup> <a name="terraformSourceName" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppResourceMappingsOutputReference.property.terraformSourceName"></a>

```typescript
public readonly terraformSourceName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppResourceMappingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccResiliencehubAppResourceMappings;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppResourceMappings">DataAwsccResiliencehubAppResourceMappings</a>

---


### DataAwsccResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference <a name="DataAwsccResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference.Initializer"></a>

```typescript
import { dataAwsccResiliencehubApp } from '@cdktn/provider-awscc'

new dataAwsccResiliencehubApp.DataAwsccResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference.property.awsAccountId">awsAccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference.property.awsRegion">awsRegion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference.property.identifier">identifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppResourceMappingsPhysicalResourceId">DataAwsccResiliencehubAppResourceMappingsPhysicalResourceId</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `awsAccountId`<sup>Required</sup> <a name="awsAccountId" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference.property.awsAccountId"></a>

```typescript
public readonly awsAccountId: string;
```

- *Type:* string

---

##### `awsRegion`<sup>Required</sup> <a name="awsRegion" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference.property.awsRegion"></a>

```typescript
public readonly awsRegion: string;
```

- *Type:* string

---

##### `identifier`<sup>Required</sup> <a name="identifier" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference.property.identifier"></a>

```typescript
public readonly identifier: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppResourceMappingsPhysicalResourceIdOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccResiliencehubAppResourceMappingsPhysicalResourceId;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccResiliencehubApp.DataAwsccResiliencehubAppResourceMappingsPhysicalResourceId">DataAwsccResiliencehubAppResourceMappingsPhysicalResourceId</a>

---




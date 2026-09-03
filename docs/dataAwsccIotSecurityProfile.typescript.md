# `dataAwsccIotSecurityProfile` Submodule <a name="`dataAwsccIotSecurityProfile` Submodule" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccIotSecurityProfile <a name="DataAwsccIotSecurityProfile" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfile"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/data-sources/iot_security_profile awscc_iot_security_profile}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfile.Initializer"></a>

```typescript
import { dataAwsccIotSecurityProfile } from '@cdktn/provider-awscc'

new dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfile(scope: Construct, id: string, config: DataAwsccIotSecurityProfileConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfile.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfile.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfile.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileConfig">DataAwsccIotSecurityProfileConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfile.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfile.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfile.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileConfig">DataAwsccIotSecurityProfileConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfile.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfile.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfile.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfile.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfile.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfile.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfile.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfile.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfile.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfile.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfile.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfile.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfile.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfile.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfile.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfile.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfile.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfile.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfile.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfile.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfile.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfile.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfile.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfile.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfile.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfile.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfile.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfile.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfile.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfile.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfile.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfile.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfile.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfile.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfile.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfile.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfile.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfile.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfile.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfile.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfile.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfile.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfile.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfile.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfile.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfile.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfile.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfile.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfile.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfile.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfile.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfile.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfile.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfile.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccIotSecurityProfile resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfile.isConstruct"></a>

```typescript
import { dataAwsccIotSecurityProfile } from '@cdktn/provider-awscc'

dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfile.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfile.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfile.isTerraformElement"></a>

```typescript
import { dataAwsccIotSecurityProfile } from '@cdktn/provider-awscc'

dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfile.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfile.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfile.isTerraformDataSource"></a>

```typescript
import { dataAwsccIotSecurityProfile } from '@cdktn/provider-awscc'

dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfile.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfile.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfile.generateConfigForImport"></a>

```typescript
import { dataAwsccIotSecurityProfile } from '@cdktn/provider-awscc'

dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfile.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAwsccIotSecurityProfile resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfile.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfile.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccIotSecurityProfile to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfile.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccIotSecurityProfile that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/data-sources/iot_security_profile#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfile.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccIotSecurityProfile to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfile.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfile.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfile.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfile.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfile.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfile.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfile.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfile.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfile.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfile.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfile.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfile.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfile.property.additionalMetricsToRetainV2">additionalMetricsToRetainV2</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2List">DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2List</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfile.property.alertTargets">alertTargets</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAlertTargetsMap">DataAwsccIotSecurityProfileAlertTargetsMap</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfile.property.behaviors">behaviors</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsList">DataAwsccIotSecurityProfileBehaviorsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfile.property.metricsExportConfig">metricsExportConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileMetricsExportConfigOutputReference">DataAwsccIotSecurityProfileMetricsExportConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfile.property.securityProfileArn">securityProfileArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfile.property.securityProfileDescription">securityProfileDescription</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfile.property.securityProfileName">securityProfileName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfile.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileTagsList">DataAwsccIotSecurityProfileTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfile.property.targetArns">targetArns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfile.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfile.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfile.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfile.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfile.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfile.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfile.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfile.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfile.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfile.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfile.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfile.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfile.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfile.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `additionalMetricsToRetainV2`<sup>Required</sup> <a name="additionalMetricsToRetainV2" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfile.property.additionalMetricsToRetainV2"></a>

```typescript
public readonly additionalMetricsToRetainV2: DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2List;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2List">DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2List</a>

---

##### `alertTargets`<sup>Required</sup> <a name="alertTargets" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfile.property.alertTargets"></a>

```typescript
public readonly alertTargets: DataAwsccIotSecurityProfileAlertTargetsMap;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAlertTargetsMap">DataAwsccIotSecurityProfileAlertTargetsMap</a>

---

##### `behaviors`<sup>Required</sup> <a name="behaviors" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfile.property.behaviors"></a>

```typescript
public readonly behaviors: DataAwsccIotSecurityProfileBehaviorsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsList">DataAwsccIotSecurityProfileBehaviorsList</a>

---

##### `metricsExportConfig`<sup>Required</sup> <a name="metricsExportConfig" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfile.property.metricsExportConfig"></a>

```typescript
public readonly metricsExportConfig: DataAwsccIotSecurityProfileMetricsExportConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileMetricsExportConfigOutputReference">DataAwsccIotSecurityProfileMetricsExportConfigOutputReference</a>

---

##### `securityProfileArn`<sup>Required</sup> <a name="securityProfileArn" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfile.property.securityProfileArn"></a>

```typescript
public readonly securityProfileArn: string;
```

- *Type:* string

---

##### `securityProfileDescription`<sup>Required</sup> <a name="securityProfileDescription" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfile.property.securityProfileDescription"></a>

```typescript
public readonly securityProfileDescription: string;
```

- *Type:* string

---

##### `securityProfileName`<sup>Required</sup> <a name="securityProfileName" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfile.property.securityProfileName"></a>

```typescript
public readonly securityProfileName: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfile.property.tags"></a>

```typescript
public readonly tags: DataAwsccIotSecurityProfileTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileTagsList">DataAwsccIotSecurityProfileTagsList</a>

---

##### `targetArns`<sup>Required</sup> <a name="targetArns" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfile.property.targetArns"></a>

```typescript
public readonly targetArns: string[];
```

- *Type:* string[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfile.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfile.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfile.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfile.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2 <a name="DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2.Initializer"></a>

```typescript
import { dataAwsccIotSecurityProfile } from '@cdktn/provider-awscc'

const dataAwsccIotSecurityProfileAdditionalMetricsToRetainV2: dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2 = { ... }
```


### DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2MetricDimension <a name="DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2MetricDimension" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2MetricDimension"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2MetricDimension.Initializer"></a>

```typescript
import { dataAwsccIotSecurityProfile } from '@cdktn/provider-awscc'

const dataAwsccIotSecurityProfileAdditionalMetricsToRetainV2MetricDimension: dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2MetricDimension = { ... }
```


### DataAwsccIotSecurityProfileAlertTargets <a name="DataAwsccIotSecurityProfileAlertTargets" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAlertTargets"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAlertTargets.Initializer"></a>

```typescript
import { dataAwsccIotSecurityProfile } from '@cdktn/provider-awscc'

const dataAwsccIotSecurityProfileAlertTargets: dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAlertTargets = { ... }
```


### DataAwsccIotSecurityProfileBehaviors <a name="DataAwsccIotSecurityProfileBehaviors" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviors"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviors.Initializer"></a>

```typescript
import { dataAwsccIotSecurityProfile } from '@cdktn/provider-awscc'

const dataAwsccIotSecurityProfileBehaviors: dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviors = { ... }
```


### DataAwsccIotSecurityProfileBehaviorsCriteria <a name="DataAwsccIotSecurityProfileBehaviorsCriteria" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteria"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteria.Initializer"></a>

```typescript
import { dataAwsccIotSecurityProfile } from '@cdktn/provider-awscc'

const dataAwsccIotSecurityProfileBehaviorsCriteria: dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteria = { ... }
```


### DataAwsccIotSecurityProfileBehaviorsCriteriaMlDetectionConfig <a name="DataAwsccIotSecurityProfileBehaviorsCriteriaMlDetectionConfig" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaMlDetectionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaMlDetectionConfig.Initializer"></a>

```typescript
import { dataAwsccIotSecurityProfile } from '@cdktn/provider-awscc'

const dataAwsccIotSecurityProfileBehaviorsCriteriaMlDetectionConfig: dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaMlDetectionConfig = { ... }
```


### DataAwsccIotSecurityProfileBehaviorsCriteriaStatisticalThreshold <a name="DataAwsccIotSecurityProfileBehaviorsCriteriaStatisticalThreshold" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaStatisticalThreshold"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaStatisticalThreshold.Initializer"></a>

```typescript
import { dataAwsccIotSecurityProfile } from '@cdktn/provider-awscc'

const dataAwsccIotSecurityProfileBehaviorsCriteriaStatisticalThreshold: dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaStatisticalThreshold = { ... }
```


### DataAwsccIotSecurityProfileBehaviorsCriteriaValue <a name="DataAwsccIotSecurityProfileBehaviorsCriteriaValue" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaValue"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaValue.Initializer"></a>

```typescript
import { dataAwsccIotSecurityProfile } from '@cdktn/provider-awscc'

const dataAwsccIotSecurityProfileBehaviorsCriteriaValue: dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaValue = { ... }
```


### DataAwsccIotSecurityProfileBehaviorsMetricDimension <a name="DataAwsccIotSecurityProfileBehaviorsMetricDimension" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsMetricDimension"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsMetricDimension.Initializer"></a>

```typescript
import { dataAwsccIotSecurityProfile } from '@cdktn/provider-awscc'

const dataAwsccIotSecurityProfileBehaviorsMetricDimension: dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsMetricDimension = { ... }
```


### DataAwsccIotSecurityProfileConfig <a name="DataAwsccIotSecurityProfileConfig" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileConfig.Initializer"></a>

```typescript
import { dataAwsccIotSecurityProfile } from '@cdktn/provider-awscc'

const dataAwsccIotSecurityProfileConfig: dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileConfig.property.id">id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/data-sources/iot_security_profile#id DataAwsccIotSecurityProfile#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccIotSecurityProfileMetricsExportConfig <a name="DataAwsccIotSecurityProfileMetricsExportConfig" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileMetricsExportConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileMetricsExportConfig.Initializer"></a>

```typescript
import { dataAwsccIotSecurityProfile } from '@cdktn/provider-awscc'

const dataAwsccIotSecurityProfileMetricsExportConfig: dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileMetricsExportConfig = { ... }
```


### DataAwsccIotSecurityProfileTags <a name="DataAwsccIotSecurityProfileTags" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileTags.Initializer"></a>

```typescript
import { dataAwsccIotSecurityProfile } from '@cdktn/provider-awscc'

const dataAwsccIotSecurityProfileTags: dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileTags = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2List <a name="DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2List" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2List"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2List.Initializer"></a>

```typescript
import { dataAwsccIotSecurityProfile } from '@cdktn/provider-awscc'

new dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2List(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2List.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2List.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2List.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2List.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2List.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2List.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2List.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2List.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2List.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2List.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2List.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2List.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2List.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2List.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2List.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2List.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2List.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2List.get"></a>

```typescript
public get(index: number): DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2OutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2List.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2List.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2List.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2List.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2List.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2MetricDimensionOutputReference <a name="DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2MetricDimensionOutputReference" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2MetricDimensionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2MetricDimensionOutputReference.Initializer"></a>

```typescript
import { dataAwsccIotSecurityProfile } from '@cdktn/provider-awscc'

new dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2MetricDimensionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2MetricDimensionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2MetricDimensionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2MetricDimensionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2MetricDimensionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2MetricDimensionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2MetricDimensionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2MetricDimensionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2MetricDimensionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2MetricDimensionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2MetricDimensionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2MetricDimensionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2MetricDimensionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2MetricDimensionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2MetricDimensionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2MetricDimensionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2MetricDimensionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2MetricDimensionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2MetricDimensionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2MetricDimensionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2MetricDimensionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2MetricDimensionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2MetricDimensionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2MetricDimensionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2MetricDimensionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2MetricDimensionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2MetricDimensionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2MetricDimensionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2MetricDimensionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2MetricDimensionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2MetricDimensionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2MetricDimensionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2MetricDimensionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2MetricDimensionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2MetricDimensionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2MetricDimensionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2MetricDimensionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2MetricDimensionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2MetricDimensionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2MetricDimensionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2MetricDimensionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2MetricDimensionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2MetricDimensionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2MetricDimensionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2MetricDimensionOutputReference.property.dimensionName">dimensionName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2MetricDimensionOutputReference.property.operator">operator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2MetricDimensionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2MetricDimension">DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2MetricDimension</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2MetricDimensionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2MetricDimensionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dimensionName`<sup>Required</sup> <a name="dimensionName" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2MetricDimensionOutputReference.property.dimensionName"></a>

```typescript
public readonly dimensionName: string;
```

- *Type:* string

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2MetricDimensionOutputReference.property.operator"></a>

```typescript
public readonly operator: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2MetricDimensionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2MetricDimension;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2MetricDimension">DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2MetricDimension</a>

---


### DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2OutputReference <a name="DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2OutputReference" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2OutputReference.Initializer"></a>

```typescript
import { dataAwsccIotSecurityProfile } from '@cdktn/provider-awscc'

new dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2OutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2OutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2OutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2OutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2OutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2OutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2OutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2OutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2OutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2OutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2OutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2OutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2OutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2OutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2OutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2OutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2OutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2OutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2OutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2OutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2OutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2OutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2OutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2OutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2OutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2OutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2OutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2OutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2OutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2OutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2OutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2OutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2OutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2OutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2OutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2OutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2OutputReference.property.exportMetric">exportMetric</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2OutputReference.property.metric">metric</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2OutputReference.property.metricDimension">metricDimension</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2MetricDimensionOutputReference">DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2MetricDimensionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2OutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2">DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2OutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2OutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `exportMetric`<sup>Required</sup> <a name="exportMetric" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2OutputReference.property.exportMetric"></a>

```typescript
public readonly exportMetric: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `metric`<sup>Required</sup> <a name="metric" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2OutputReference.property.metric"></a>

```typescript
public readonly metric: string;
```

- *Type:* string

---

##### `metricDimension`<sup>Required</sup> <a name="metricDimension" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2OutputReference.property.metricDimension"></a>

```typescript
public readonly metricDimension: DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2MetricDimensionOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2MetricDimensionOutputReference">DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2MetricDimensionOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2OutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2">DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2</a>

---


### DataAwsccIotSecurityProfileAlertTargetsMap <a name="DataAwsccIotSecurityProfileAlertTargetsMap" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAlertTargetsMap"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAlertTargetsMap.Initializer"></a>

```typescript
import { dataAwsccIotSecurityProfile } from '@cdktn/provider-awscc'

new dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAlertTargetsMap(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAlertTargetsMap.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAlertTargetsMap.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAlertTargetsMap.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAlertTargetsMap.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAlertTargetsMap.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAlertTargetsMap.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAlertTargetsMap.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAlertTargetsMap.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAlertTargetsMap.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAlertTargetsMap.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAlertTargetsMap.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAlertTargetsMap.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAlertTargetsMap.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAlertTargetsMap.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAlertTargetsMap.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAlertTargetsMap.get"></a>

```typescript
public get(key: string): DataAwsccIotSecurityProfileAlertTargetsOutputReference
```

###### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAlertTargetsMap.get.parameter.key"></a>

- *Type:* string

the key of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAlertTargetsMap.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAlertTargetsMap.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAlertTargetsMap.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAlertTargetsMap.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccIotSecurityProfileAlertTargetsOutputReference <a name="DataAwsccIotSecurityProfileAlertTargetsOutputReference" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAlertTargetsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAlertTargetsOutputReference.Initializer"></a>

```typescript
import { dataAwsccIotSecurityProfile } from '@cdktn/provider-awscc'

new dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAlertTargetsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectKey: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAlertTargetsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAlertTargetsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAlertTargetsOutputReference.Initializer.parameter.complexObjectKey">complexObjectKey</a></code> | <code>string</code> | the key of this item in the map. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAlertTargetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAlertTargetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectKey`<sup>Required</sup> <a name="complexObjectKey" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAlertTargetsOutputReference.Initializer.parameter.complexObjectKey"></a>

- *Type:* string

the key of this item in the map.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAlertTargetsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAlertTargetsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAlertTargetsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAlertTargetsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAlertTargetsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAlertTargetsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAlertTargetsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAlertTargetsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAlertTargetsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAlertTargetsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAlertTargetsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAlertTargetsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAlertTargetsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAlertTargetsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAlertTargetsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAlertTargetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAlertTargetsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAlertTargetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAlertTargetsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAlertTargetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAlertTargetsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAlertTargetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAlertTargetsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAlertTargetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAlertTargetsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAlertTargetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAlertTargetsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAlertTargetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAlertTargetsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAlertTargetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAlertTargetsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAlertTargetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAlertTargetsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAlertTargetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAlertTargetsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAlertTargetsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAlertTargetsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAlertTargetsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAlertTargetsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAlertTargetsOutputReference.property.alertTargetArn">alertTargetArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAlertTargetsOutputReference.property.roleArn">roleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAlertTargetsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAlertTargets">DataAwsccIotSecurityProfileAlertTargets</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAlertTargetsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAlertTargetsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `alertTargetArn`<sup>Required</sup> <a name="alertTargetArn" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAlertTargetsOutputReference.property.alertTargetArn"></a>

```typescript
public readonly alertTargetArn: string;
```

- *Type:* string

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAlertTargetsOutputReference.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAlertTargetsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccIotSecurityProfileAlertTargets;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAlertTargets">DataAwsccIotSecurityProfileAlertTargets</a>

---


### DataAwsccIotSecurityProfileBehaviorsCriteriaMlDetectionConfigOutputReference <a name="DataAwsccIotSecurityProfileBehaviorsCriteriaMlDetectionConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaMlDetectionConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaMlDetectionConfigOutputReference.Initializer"></a>

```typescript
import { dataAwsccIotSecurityProfile } from '@cdktn/provider-awscc'

new dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaMlDetectionConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaMlDetectionConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaMlDetectionConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaMlDetectionConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaMlDetectionConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaMlDetectionConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaMlDetectionConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaMlDetectionConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaMlDetectionConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaMlDetectionConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaMlDetectionConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaMlDetectionConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaMlDetectionConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaMlDetectionConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaMlDetectionConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaMlDetectionConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaMlDetectionConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaMlDetectionConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaMlDetectionConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaMlDetectionConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaMlDetectionConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaMlDetectionConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaMlDetectionConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaMlDetectionConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaMlDetectionConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaMlDetectionConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaMlDetectionConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaMlDetectionConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaMlDetectionConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaMlDetectionConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaMlDetectionConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaMlDetectionConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaMlDetectionConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaMlDetectionConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaMlDetectionConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaMlDetectionConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaMlDetectionConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaMlDetectionConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaMlDetectionConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaMlDetectionConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaMlDetectionConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaMlDetectionConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaMlDetectionConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaMlDetectionConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaMlDetectionConfigOutputReference.property.confidenceLevel">confidenceLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaMlDetectionConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaMlDetectionConfig">DataAwsccIotSecurityProfileBehaviorsCriteriaMlDetectionConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaMlDetectionConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaMlDetectionConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `confidenceLevel`<sup>Required</sup> <a name="confidenceLevel" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaMlDetectionConfigOutputReference.property.confidenceLevel"></a>

```typescript
public readonly confidenceLevel: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaMlDetectionConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccIotSecurityProfileBehaviorsCriteriaMlDetectionConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaMlDetectionConfig">DataAwsccIotSecurityProfileBehaviorsCriteriaMlDetectionConfig</a>

---


### DataAwsccIotSecurityProfileBehaviorsCriteriaOutputReference <a name="DataAwsccIotSecurityProfileBehaviorsCriteriaOutputReference" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaOutputReference.Initializer"></a>

```typescript
import { dataAwsccIotSecurityProfile } from '@cdktn/provider-awscc'

new dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaOutputReference.property.comparisonOperator">comparisonOperator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaOutputReference.property.consecutiveDatapointsToAlarm">consecutiveDatapointsToAlarm</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaOutputReference.property.consecutiveDatapointsToClear">consecutiveDatapointsToClear</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaOutputReference.property.durationSeconds">durationSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaOutputReference.property.mlDetectionConfig">mlDetectionConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaMlDetectionConfigOutputReference">DataAwsccIotSecurityProfileBehaviorsCriteriaMlDetectionConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaOutputReference.property.statisticalThreshold">statisticalThreshold</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaStatisticalThresholdOutputReference">DataAwsccIotSecurityProfileBehaviorsCriteriaStatisticalThresholdOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaOutputReference.property.value">value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaValueOutputReference">DataAwsccIotSecurityProfileBehaviorsCriteriaValueOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteria">DataAwsccIotSecurityProfileBehaviorsCriteria</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `comparisonOperator`<sup>Required</sup> <a name="comparisonOperator" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaOutputReference.property.comparisonOperator"></a>

```typescript
public readonly comparisonOperator: string;
```

- *Type:* string

---

##### `consecutiveDatapointsToAlarm`<sup>Required</sup> <a name="consecutiveDatapointsToAlarm" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaOutputReference.property.consecutiveDatapointsToAlarm"></a>

```typescript
public readonly consecutiveDatapointsToAlarm: number;
```

- *Type:* number

---

##### `consecutiveDatapointsToClear`<sup>Required</sup> <a name="consecutiveDatapointsToClear" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaOutputReference.property.consecutiveDatapointsToClear"></a>

```typescript
public readonly consecutiveDatapointsToClear: number;
```

- *Type:* number

---

##### `durationSeconds`<sup>Required</sup> <a name="durationSeconds" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaOutputReference.property.durationSeconds"></a>

```typescript
public readonly durationSeconds: number;
```

- *Type:* number

---

##### `mlDetectionConfig`<sup>Required</sup> <a name="mlDetectionConfig" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaOutputReference.property.mlDetectionConfig"></a>

```typescript
public readonly mlDetectionConfig: DataAwsccIotSecurityProfileBehaviorsCriteriaMlDetectionConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaMlDetectionConfigOutputReference">DataAwsccIotSecurityProfileBehaviorsCriteriaMlDetectionConfigOutputReference</a>

---

##### `statisticalThreshold`<sup>Required</sup> <a name="statisticalThreshold" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaOutputReference.property.statisticalThreshold"></a>

```typescript
public readonly statisticalThreshold: DataAwsccIotSecurityProfileBehaviorsCriteriaStatisticalThresholdOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaStatisticalThresholdOutputReference">DataAwsccIotSecurityProfileBehaviorsCriteriaStatisticalThresholdOutputReference</a>

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaOutputReference.property.value"></a>

```typescript
public readonly value: DataAwsccIotSecurityProfileBehaviorsCriteriaValueOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaValueOutputReference">DataAwsccIotSecurityProfileBehaviorsCriteriaValueOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccIotSecurityProfileBehaviorsCriteria;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteria">DataAwsccIotSecurityProfileBehaviorsCriteria</a>

---


### DataAwsccIotSecurityProfileBehaviorsCriteriaStatisticalThresholdOutputReference <a name="DataAwsccIotSecurityProfileBehaviorsCriteriaStatisticalThresholdOutputReference" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaStatisticalThresholdOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaStatisticalThresholdOutputReference.Initializer"></a>

```typescript
import { dataAwsccIotSecurityProfile } from '@cdktn/provider-awscc'

new dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaStatisticalThresholdOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaStatisticalThresholdOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaStatisticalThresholdOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaStatisticalThresholdOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaStatisticalThresholdOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaStatisticalThresholdOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaStatisticalThresholdOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaStatisticalThresholdOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaStatisticalThresholdOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaStatisticalThresholdOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaStatisticalThresholdOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaStatisticalThresholdOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaStatisticalThresholdOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaStatisticalThresholdOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaStatisticalThresholdOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaStatisticalThresholdOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaStatisticalThresholdOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaStatisticalThresholdOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaStatisticalThresholdOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaStatisticalThresholdOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaStatisticalThresholdOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaStatisticalThresholdOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaStatisticalThresholdOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaStatisticalThresholdOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaStatisticalThresholdOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaStatisticalThresholdOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaStatisticalThresholdOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaStatisticalThresholdOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaStatisticalThresholdOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaStatisticalThresholdOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaStatisticalThresholdOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaStatisticalThresholdOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaStatisticalThresholdOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaStatisticalThresholdOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaStatisticalThresholdOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaStatisticalThresholdOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaStatisticalThresholdOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaStatisticalThresholdOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaStatisticalThresholdOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaStatisticalThresholdOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaStatisticalThresholdOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaStatisticalThresholdOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaStatisticalThresholdOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaStatisticalThresholdOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaStatisticalThresholdOutputReference.property.statistic">statistic</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaStatisticalThresholdOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaStatisticalThreshold">DataAwsccIotSecurityProfileBehaviorsCriteriaStatisticalThreshold</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaStatisticalThresholdOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaStatisticalThresholdOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `statistic`<sup>Required</sup> <a name="statistic" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaStatisticalThresholdOutputReference.property.statistic"></a>

```typescript
public readonly statistic: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaStatisticalThresholdOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccIotSecurityProfileBehaviorsCriteriaStatisticalThreshold;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaStatisticalThreshold">DataAwsccIotSecurityProfileBehaviorsCriteriaStatisticalThreshold</a>

---


### DataAwsccIotSecurityProfileBehaviorsCriteriaValueOutputReference <a name="DataAwsccIotSecurityProfileBehaviorsCriteriaValueOutputReference" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaValueOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaValueOutputReference.Initializer"></a>

```typescript
import { dataAwsccIotSecurityProfile } from '@cdktn/provider-awscc'

new dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaValueOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaValueOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaValueOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaValueOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaValueOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaValueOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaValueOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaValueOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaValueOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaValueOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaValueOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaValueOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaValueOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaValueOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaValueOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaValueOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaValueOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaValueOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaValueOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaValueOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaValueOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaValueOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaValueOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaValueOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaValueOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaValueOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaValueOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaValueOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaValueOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaValueOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaValueOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaValueOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaValueOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaValueOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaValueOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaValueOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaValueOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaValueOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaValueOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaValueOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaValueOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaValueOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaValueOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaValueOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaValueOutputReference.property.cidrs">cidrs</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaValueOutputReference.property.count">count</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaValueOutputReference.property.number">number</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaValueOutputReference.property.numbers">numbers</a></code> | <code>number[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaValueOutputReference.property.ports">ports</a></code> | <code>number[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaValueOutputReference.property.strings">strings</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaValueOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaValue">DataAwsccIotSecurityProfileBehaviorsCriteriaValue</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaValueOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaValueOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `cidrs`<sup>Required</sup> <a name="cidrs" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaValueOutputReference.property.cidrs"></a>

```typescript
public readonly cidrs: string[];
```

- *Type:* string[]

---

##### `count`<sup>Required</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaValueOutputReference.property.count"></a>

```typescript
public readonly count: string;
```

- *Type:* string

---

##### `number`<sup>Required</sup> <a name="number" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaValueOutputReference.property.number"></a>

```typescript
public readonly number: number;
```

- *Type:* number

---

##### `numbers`<sup>Required</sup> <a name="numbers" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaValueOutputReference.property.numbers"></a>

```typescript
public readonly numbers: number[];
```

- *Type:* number[]

---

##### `ports`<sup>Required</sup> <a name="ports" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaValueOutputReference.property.ports"></a>

```typescript
public readonly ports: number[];
```

- *Type:* number[]

---

##### `strings`<sup>Required</sup> <a name="strings" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaValueOutputReference.property.strings"></a>

```typescript
public readonly strings: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaValueOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccIotSecurityProfileBehaviorsCriteriaValue;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaValue">DataAwsccIotSecurityProfileBehaviorsCriteriaValue</a>

---


### DataAwsccIotSecurityProfileBehaviorsList <a name="DataAwsccIotSecurityProfileBehaviorsList" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsList.Initializer"></a>

```typescript
import { dataAwsccIotSecurityProfile } from '@cdktn/provider-awscc'

new dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsList.get"></a>

```typescript
public get(index: number): DataAwsccIotSecurityProfileBehaviorsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccIotSecurityProfileBehaviorsMetricDimensionOutputReference <a name="DataAwsccIotSecurityProfileBehaviorsMetricDimensionOutputReference" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsMetricDimensionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsMetricDimensionOutputReference.Initializer"></a>

```typescript
import { dataAwsccIotSecurityProfile } from '@cdktn/provider-awscc'

new dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsMetricDimensionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsMetricDimensionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsMetricDimensionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsMetricDimensionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsMetricDimensionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsMetricDimensionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsMetricDimensionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsMetricDimensionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsMetricDimensionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsMetricDimensionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsMetricDimensionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsMetricDimensionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsMetricDimensionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsMetricDimensionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsMetricDimensionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsMetricDimensionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsMetricDimensionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsMetricDimensionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsMetricDimensionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsMetricDimensionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsMetricDimensionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsMetricDimensionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsMetricDimensionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsMetricDimensionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsMetricDimensionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsMetricDimensionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsMetricDimensionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsMetricDimensionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsMetricDimensionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsMetricDimensionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsMetricDimensionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsMetricDimensionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsMetricDimensionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsMetricDimensionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsMetricDimensionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsMetricDimensionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsMetricDimensionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsMetricDimensionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsMetricDimensionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsMetricDimensionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsMetricDimensionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsMetricDimensionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsMetricDimensionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsMetricDimensionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsMetricDimensionOutputReference.property.dimensionName">dimensionName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsMetricDimensionOutputReference.property.operator">operator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsMetricDimensionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsMetricDimension">DataAwsccIotSecurityProfileBehaviorsMetricDimension</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsMetricDimensionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsMetricDimensionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dimensionName`<sup>Required</sup> <a name="dimensionName" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsMetricDimensionOutputReference.property.dimensionName"></a>

```typescript
public readonly dimensionName: string;
```

- *Type:* string

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsMetricDimensionOutputReference.property.operator"></a>

```typescript
public readonly operator: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsMetricDimensionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccIotSecurityProfileBehaviorsMetricDimension;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsMetricDimension">DataAwsccIotSecurityProfileBehaviorsMetricDimension</a>

---


### DataAwsccIotSecurityProfileBehaviorsOutputReference <a name="DataAwsccIotSecurityProfileBehaviorsOutputReference" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsOutputReference.Initializer"></a>

```typescript
import { dataAwsccIotSecurityProfile } from '@cdktn/provider-awscc'

new dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsOutputReference.property.criteria">criteria</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaOutputReference">DataAwsccIotSecurityProfileBehaviorsCriteriaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsOutputReference.property.exportMetric">exportMetric</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsOutputReference.property.metric">metric</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsOutputReference.property.metricDimension">metricDimension</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsMetricDimensionOutputReference">DataAwsccIotSecurityProfileBehaviorsMetricDimensionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsOutputReference.property.suppressAlerts">suppressAlerts</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviors">DataAwsccIotSecurityProfileBehaviors</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `criteria`<sup>Required</sup> <a name="criteria" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsOutputReference.property.criteria"></a>

```typescript
public readonly criteria: DataAwsccIotSecurityProfileBehaviorsCriteriaOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaOutputReference">DataAwsccIotSecurityProfileBehaviorsCriteriaOutputReference</a>

---

##### `exportMetric`<sup>Required</sup> <a name="exportMetric" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsOutputReference.property.exportMetric"></a>

```typescript
public readonly exportMetric: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `metric`<sup>Required</sup> <a name="metric" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsOutputReference.property.metric"></a>

```typescript
public readonly metric: string;
```

- *Type:* string

---

##### `metricDimension`<sup>Required</sup> <a name="metricDimension" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsOutputReference.property.metricDimension"></a>

```typescript
public readonly metricDimension: DataAwsccIotSecurityProfileBehaviorsMetricDimensionOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsMetricDimensionOutputReference">DataAwsccIotSecurityProfileBehaviorsMetricDimensionOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `suppressAlerts`<sup>Required</sup> <a name="suppressAlerts" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsOutputReference.property.suppressAlerts"></a>

```typescript
public readonly suppressAlerts: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccIotSecurityProfileBehaviors;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviors">DataAwsccIotSecurityProfileBehaviors</a>

---


### DataAwsccIotSecurityProfileMetricsExportConfigOutputReference <a name="DataAwsccIotSecurityProfileMetricsExportConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileMetricsExportConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileMetricsExportConfigOutputReference.Initializer"></a>

```typescript
import { dataAwsccIotSecurityProfile } from '@cdktn/provider-awscc'

new dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileMetricsExportConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileMetricsExportConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileMetricsExportConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileMetricsExportConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileMetricsExportConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileMetricsExportConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileMetricsExportConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileMetricsExportConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileMetricsExportConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileMetricsExportConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileMetricsExportConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileMetricsExportConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileMetricsExportConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileMetricsExportConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileMetricsExportConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileMetricsExportConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileMetricsExportConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileMetricsExportConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileMetricsExportConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileMetricsExportConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileMetricsExportConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileMetricsExportConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileMetricsExportConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileMetricsExportConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileMetricsExportConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileMetricsExportConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileMetricsExportConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileMetricsExportConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileMetricsExportConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileMetricsExportConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileMetricsExportConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileMetricsExportConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileMetricsExportConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileMetricsExportConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileMetricsExportConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileMetricsExportConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileMetricsExportConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileMetricsExportConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileMetricsExportConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileMetricsExportConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileMetricsExportConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileMetricsExportConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileMetricsExportConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileMetricsExportConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileMetricsExportConfigOutputReference.property.mqttTopic">mqttTopic</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileMetricsExportConfigOutputReference.property.roleArn">roleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileMetricsExportConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileMetricsExportConfig">DataAwsccIotSecurityProfileMetricsExportConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileMetricsExportConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileMetricsExportConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `mqttTopic`<sup>Required</sup> <a name="mqttTopic" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileMetricsExportConfigOutputReference.property.mqttTopic"></a>

```typescript
public readonly mqttTopic: string;
```

- *Type:* string

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileMetricsExportConfigOutputReference.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileMetricsExportConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccIotSecurityProfileMetricsExportConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileMetricsExportConfig">DataAwsccIotSecurityProfileMetricsExportConfig</a>

---


### DataAwsccIotSecurityProfileTagsList <a name="DataAwsccIotSecurityProfileTagsList" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileTagsList.Initializer"></a>

```typescript
import { dataAwsccIotSecurityProfile } from '@cdktn/provider-awscc'

new dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileTagsList.get"></a>

```typescript
public get(index: number): DataAwsccIotSecurityProfileTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccIotSecurityProfileTagsOutputReference <a name="DataAwsccIotSecurityProfileTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileTagsOutputReference.Initializer"></a>

```typescript
import { dataAwsccIotSecurityProfile } from '@cdktn/provider-awscc'

new dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileTags">DataAwsccIotSecurityProfileTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccIotSecurityProfileTags;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileTags">DataAwsccIotSecurityProfileTags</a>

---




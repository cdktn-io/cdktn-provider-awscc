# `dataAwsccCloudwatchAlert` Submodule <a name="`dataAwsccCloudwatchAlert` Submodule" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlert"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccCloudwatchAlert <a name="DataAwsccCloudwatchAlert" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlert"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/data-sources/cloudwatch_alert awscc_cloudwatch_alert}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlert.Initializer"></a>

```typescript
import { dataAwsccCloudwatchAlert } from '@cdktn/provider-awscc'

new dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlert(scope: Construct, id: string, config: DataAwsccCloudwatchAlertConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlert.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlert.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlert.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertConfig">DataAwsccCloudwatchAlertConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlert.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlert.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlert.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertConfig">DataAwsccCloudwatchAlertConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlert.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlert.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlert.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlert.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlert.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlert.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlert.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlert.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlert.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlert.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlert.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlert.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlert.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlert.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlert.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlert.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlert.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlert.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlert.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlert.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlert.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlert.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlert.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlert.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlert.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlert.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlert.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlert.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlert.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlert.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlert.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlert.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlert.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlert.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlert.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlert.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlert.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlert.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlert.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlert.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlert.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlert.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlert.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlert.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlert.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlert.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlert.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlert.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlert.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlert.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlert.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlert.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlert.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlert.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccCloudwatchAlert resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlert.isConstruct"></a>

```typescript
import { dataAwsccCloudwatchAlert } from '@cdktn/provider-awscc'

dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlert.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlert.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlert.isTerraformElement"></a>

```typescript
import { dataAwsccCloudwatchAlert } from '@cdktn/provider-awscc'

dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlert.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlert.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlert.isTerraformDataSource"></a>

```typescript
import { dataAwsccCloudwatchAlert } from '@cdktn/provider-awscc'

dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlert.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlert.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlert.generateConfigForImport"></a>

```typescript
import { dataAwsccCloudwatchAlert } from '@cdktn/provider-awscc'

dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlert.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAwsccCloudwatchAlert resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlert.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlert.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccCloudwatchAlert to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlert.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccCloudwatchAlert that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/data-sources/cloudwatch_alert#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlert.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccCloudwatchAlert to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlert.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlert.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlert.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlert.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlert.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlert.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlert.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlert.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlert.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlert.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlert.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlert.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlert.property.accountId">accountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlert.property.alertId">alertId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlert.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlert.property.createdAt">createdAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlert.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlert.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlert.property.notificationRules">notificationRules</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertNotificationRulesList">DataAwsccCloudwatchAlertNotificationRulesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlert.property.notificationsEnabled">notificationsEnabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlert.property.profileId">profileId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlert.property.rule">rule</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertRuleOutputReference">DataAwsccCloudwatchAlertRuleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlert.property.spaceId">spaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlert.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertTagsList">DataAwsccCloudwatchAlertTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlert.property.updatedAt">updatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlert.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlert.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlert.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlert.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlert.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlert.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlert.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlert.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlert.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlert.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlert.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlert.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlert.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlert.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlert.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

---

##### `alertId`<sup>Required</sup> <a name="alertId" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlert.property.alertId"></a>

```typescript
public readonly alertId: string;
```

- *Type:* string

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlert.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlert.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlert.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlert.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `notificationRules`<sup>Required</sup> <a name="notificationRules" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlert.property.notificationRules"></a>

```typescript
public readonly notificationRules: DataAwsccCloudwatchAlertNotificationRulesList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertNotificationRulesList">DataAwsccCloudwatchAlertNotificationRulesList</a>

---

##### `notificationsEnabled`<sup>Required</sup> <a name="notificationsEnabled" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlert.property.notificationsEnabled"></a>

```typescript
public readonly notificationsEnabled: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `profileId`<sup>Required</sup> <a name="profileId" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlert.property.profileId"></a>

```typescript
public readonly profileId: string;
```

- *Type:* string

---

##### `rule`<sup>Required</sup> <a name="rule" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlert.property.rule"></a>

```typescript
public readonly rule: DataAwsccCloudwatchAlertRuleOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertRuleOutputReference">DataAwsccCloudwatchAlertRuleOutputReference</a>

---

##### `spaceId`<sup>Required</sup> <a name="spaceId" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlert.property.spaceId"></a>

```typescript
public readonly spaceId: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlert.property.tags"></a>

```typescript
public readonly tags: DataAwsccCloudwatchAlertTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertTagsList">DataAwsccCloudwatchAlertTagsList</a>

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlert.property.updatedAt"></a>

```typescript
public readonly updatedAt: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlert.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlert.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlert.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlert.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccCloudwatchAlertConfig <a name="DataAwsccCloudwatchAlertConfig" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertConfig.Initializer"></a>

```typescript
import { dataAwsccCloudwatchAlert } from '@cdktn/provider-awscc'

const dataAwsccCloudwatchAlertConfig: dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertConfig.property.id">id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/data-sources/cloudwatch_alert#id DataAwsccCloudwatchAlert#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccCloudwatchAlertNotificationRules <a name="DataAwsccCloudwatchAlertNotificationRules" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertNotificationRules"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertNotificationRules.Initializer"></a>

```typescript
import { dataAwsccCloudwatchAlert } from '@cdktn/provider-awscc'

const dataAwsccCloudwatchAlertNotificationRules: dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertNotificationRules = { ... }
```


### DataAwsccCloudwatchAlertNotificationRulesTarget <a name="DataAwsccCloudwatchAlertNotificationRulesTarget" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertNotificationRulesTarget"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertNotificationRulesTarget.Initializer"></a>

```typescript
import { dataAwsccCloudwatchAlert } from '@cdktn/provider-awscc'

const dataAwsccCloudwatchAlertNotificationRulesTarget: dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertNotificationRulesTarget = { ... }
```


### DataAwsccCloudwatchAlertNotificationRulesTrigger <a name="DataAwsccCloudwatchAlertNotificationRulesTrigger" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertNotificationRulesTrigger"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertNotificationRulesTrigger.Initializer"></a>

```typescript
import { dataAwsccCloudwatchAlert } from '@cdktn/provider-awscc'

const dataAwsccCloudwatchAlertNotificationRulesTrigger: dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertNotificationRulesTrigger = { ... }
```


### DataAwsccCloudwatchAlertRule <a name="DataAwsccCloudwatchAlertRule" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertRule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertRule.Initializer"></a>

```typescript
import { dataAwsccCloudwatchAlert } from '@cdktn/provider-awscc'

const dataAwsccCloudwatchAlertRule: dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertRule = { ... }
```


### DataAwsccCloudwatchAlertRuleTelemetryRule <a name="DataAwsccCloudwatchAlertRuleTelemetryRule" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertRuleTelemetryRule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertRuleTelemetryRule.Initializer"></a>

```typescript
import { dataAwsccCloudwatchAlert } from '@cdktn/provider-awscc'

const dataAwsccCloudwatchAlertRuleTelemetryRule: dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertRuleTelemetryRule = { ... }
```


### DataAwsccCloudwatchAlertRuleTelemetryRuleCondition <a name="DataAwsccCloudwatchAlertRuleTelemetryRuleCondition" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertRuleTelemetryRuleCondition"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertRuleTelemetryRuleCondition.Initializer"></a>

```typescript
import { dataAwsccCloudwatchAlert } from '@cdktn/provider-awscc'

const dataAwsccCloudwatchAlertRuleTelemetryRuleCondition: dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertRuleTelemetryRuleCondition = { ... }
```


### DataAwsccCloudwatchAlertRuleTelemetryRuleEvaluation <a name="DataAwsccCloudwatchAlertRuleTelemetryRuleEvaluation" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertRuleTelemetryRuleEvaluation"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertRuleTelemetryRuleEvaluation.Initializer"></a>

```typescript
import { dataAwsccCloudwatchAlert } from '@cdktn/provider-awscc'

const dataAwsccCloudwatchAlertRuleTelemetryRuleEvaluation: dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertRuleTelemetryRuleEvaluation = { ... }
```


### DataAwsccCloudwatchAlertRuleTelemetryRuleNoData <a name="DataAwsccCloudwatchAlertRuleTelemetryRuleNoData" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertRuleTelemetryRuleNoData"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertRuleTelemetryRuleNoData.Initializer"></a>

```typescript
import { dataAwsccCloudwatchAlert } from '@cdktn/provider-awscc'

const dataAwsccCloudwatchAlertRuleTelemetryRuleNoData: dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertRuleTelemetryRuleNoData = { ... }
```


### DataAwsccCloudwatchAlertRuleTelemetryRuleQuery <a name="DataAwsccCloudwatchAlertRuleTelemetryRuleQuery" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertRuleTelemetryRuleQuery"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertRuleTelemetryRuleQuery.Initializer"></a>

```typescript
import { dataAwsccCloudwatchAlert } from '@cdktn/provider-awscc'

const dataAwsccCloudwatchAlertRuleTelemetryRuleQuery: dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertRuleTelemetryRuleQuery = { ... }
```


### DataAwsccCloudwatchAlertTags <a name="DataAwsccCloudwatchAlertTags" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertTags.Initializer"></a>

```typescript
import { dataAwsccCloudwatchAlert } from '@cdktn/provider-awscc'

const dataAwsccCloudwatchAlertTags: dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertTags = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccCloudwatchAlertNotificationRulesList <a name="DataAwsccCloudwatchAlertNotificationRulesList" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertNotificationRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertNotificationRulesList.Initializer"></a>

```typescript
import { dataAwsccCloudwatchAlert } from '@cdktn/provider-awscc'

new dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertNotificationRulesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertNotificationRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertNotificationRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertNotificationRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertNotificationRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertNotificationRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertNotificationRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertNotificationRulesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertNotificationRulesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertNotificationRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertNotificationRulesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertNotificationRulesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertNotificationRulesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertNotificationRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertNotificationRulesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertNotificationRulesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertNotificationRulesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertNotificationRulesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertNotificationRulesList.get"></a>

```typescript
public get(index: number): DataAwsccCloudwatchAlertNotificationRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertNotificationRulesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertNotificationRulesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertNotificationRulesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertNotificationRulesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertNotificationRulesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccCloudwatchAlertNotificationRulesOutputReference <a name="DataAwsccCloudwatchAlertNotificationRulesOutputReference" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertNotificationRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertNotificationRulesOutputReference.Initializer"></a>

```typescript
import { dataAwsccCloudwatchAlert } from '@cdktn/provider-awscc'

new dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertNotificationRulesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertNotificationRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertNotificationRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertNotificationRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertNotificationRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertNotificationRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertNotificationRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertNotificationRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertNotificationRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertNotificationRulesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertNotificationRulesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertNotificationRulesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertNotificationRulesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertNotificationRulesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertNotificationRulesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertNotificationRulesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertNotificationRulesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertNotificationRulesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertNotificationRulesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertNotificationRulesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertNotificationRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertNotificationRulesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertNotificationRulesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertNotificationRulesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertNotificationRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertNotificationRulesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertNotificationRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertNotificationRulesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertNotificationRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertNotificationRulesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertNotificationRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertNotificationRulesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertNotificationRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertNotificationRulesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertNotificationRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertNotificationRulesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertNotificationRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertNotificationRulesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertNotificationRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertNotificationRulesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertNotificationRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertNotificationRulesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertNotificationRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertNotificationRulesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertNotificationRulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertNotificationRulesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertNotificationRulesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertNotificationRulesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertNotificationRulesOutputReference.property.target">target</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertNotificationRulesTargetOutputReference">DataAwsccCloudwatchAlertNotificationRulesTargetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertNotificationRulesOutputReference.property.trigger">trigger</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertNotificationRulesTriggerOutputReference">DataAwsccCloudwatchAlertNotificationRulesTriggerOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertNotificationRulesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertNotificationRules">DataAwsccCloudwatchAlertNotificationRules</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertNotificationRulesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertNotificationRulesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertNotificationRulesOutputReference.property.target"></a>

```typescript
public readonly target: DataAwsccCloudwatchAlertNotificationRulesTargetOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertNotificationRulesTargetOutputReference">DataAwsccCloudwatchAlertNotificationRulesTargetOutputReference</a>

---

##### `trigger`<sup>Required</sup> <a name="trigger" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertNotificationRulesOutputReference.property.trigger"></a>

```typescript
public readonly trigger: DataAwsccCloudwatchAlertNotificationRulesTriggerOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertNotificationRulesTriggerOutputReference">DataAwsccCloudwatchAlertNotificationRulesTriggerOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertNotificationRulesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccCloudwatchAlertNotificationRules;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertNotificationRules">DataAwsccCloudwatchAlertNotificationRules</a>

---


### DataAwsccCloudwatchAlertNotificationRulesTargetOutputReference <a name="DataAwsccCloudwatchAlertNotificationRulesTargetOutputReference" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertNotificationRulesTargetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertNotificationRulesTargetOutputReference.Initializer"></a>

```typescript
import { dataAwsccCloudwatchAlert } from '@cdktn/provider-awscc'

new dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertNotificationRulesTargetOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertNotificationRulesTargetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertNotificationRulesTargetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertNotificationRulesTargetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertNotificationRulesTargetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertNotificationRulesTargetOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertNotificationRulesTargetOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertNotificationRulesTargetOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertNotificationRulesTargetOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertNotificationRulesTargetOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertNotificationRulesTargetOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertNotificationRulesTargetOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertNotificationRulesTargetOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertNotificationRulesTargetOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertNotificationRulesTargetOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertNotificationRulesTargetOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertNotificationRulesTargetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertNotificationRulesTargetOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertNotificationRulesTargetOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertNotificationRulesTargetOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertNotificationRulesTargetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertNotificationRulesTargetOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertNotificationRulesTargetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertNotificationRulesTargetOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertNotificationRulesTargetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertNotificationRulesTargetOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertNotificationRulesTargetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertNotificationRulesTargetOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertNotificationRulesTargetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertNotificationRulesTargetOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertNotificationRulesTargetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertNotificationRulesTargetOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertNotificationRulesTargetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertNotificationRulesTargetOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertNotificationRulesTargetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertNotificationRulesTargetOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertNotificationRulesTargetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertNotificationRulesTargetOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertNotificationRulesTargetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertNotificationRulesTargetOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertNotificationRulesTargetOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertNotificationRulesTargetOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertNotificationRulesTargetOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertNotificationRulesTargetOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertNotificationRulesTargetOutputReference.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertNotificationRulesTargetOutputReference.property.metadata">metadata</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertNotificationRulesTargetOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertNotificationRulesTargetOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertNotificationRulesTarget">DataAwsccCloudwatchAlertNotificationRulesTarget</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertNotificationRulesTargetOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertNotificationRulesTargetOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertNotificationRulesTargetOutputReference.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertNotificationRulesTargetOutputReference.property.metadata"></a>

```typescript
public readonly metadata: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertNotificationRulesTargetOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertNotificationRulesTargetOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccCloudwatchAlertNotificationRulesTarget;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertNotificationRulesTarget">DataAwsccCloudwatchAlertNotificationRulesTarget</a>

---


### DataAwsccCloudwatchAlertNotificationRulesTriggerOutputReference <a name="DataAwsccCloudwatchAlertNotificationRulesTriggerOutputReference" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertNotificationRulesTriggerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertNotificationRulesTriggerOutputReference.Initializer"></a>

```typescript
import { dataAwsccCloudwatchAlert } from '@cdktn/provider-awscc'

new dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertNotificationRulesTriggerOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertNotificationRulesTriggerOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertNotificationRulesTriggerOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertNotificationRulesTriggerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertNotificationRulesTriggerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertNotificationRulesTriggerOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertNotificationRulesTriggerOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertNotificationRulesTriggerOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertNotificationRulesTriggerOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertNotificationRulesTriggerOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertNotificationRulesTriggerOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertNotificationRulesTriggerOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertNotificationRulesTriggerOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertNotificationRulesTriggerOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertNotificationRulesTriggerOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertNotificationRulesTriggerOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertNotificationRulesTriggerOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertNotificationRulesTriggerOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertNotificationRulesTriggerOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertNotificationRulesTriggerOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertNotificationRulesTriggerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertNotificationRulesTriggerOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertNotificationRulesTriggerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertNotificationRulesTriggerOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertNotificationRulesTriggerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertNotificationRulesTriggerOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertNotificationRulesTriggerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertNotificationRulesTriggerOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertNotificationRulesTriggerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertNotificationRulesTriggerOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertNotificationRulesTriggerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertNotificationRulesTriggerOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertNotificationRulesTriggerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertNotificationRulesTriggerOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertNotificationRulesTriggerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertNotificationRulesTriggerOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertNotificationRulesTriggerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertNotificationRulesTriggerOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertNotificationRulesTriggerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertNotificationRulesTriggerOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertNotificationRulesTriggerOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertNotificationRulesTriggerOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertNotificationRulesTriggerOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertNotificationRulesTriggerOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertNotificationRulesTriggerOutputReference.property.stateValues">stateValues</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertNotificationRulesTriggerOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertNotificationRulesTrigger">DataAwsccCloudwatchAlertNotificationRulesTrigger</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertNotificationRulesTriggerOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertNotificationRulesTriggerOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `stateValues`<sup>Required</sup> <a name="stateValues" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertNotificationRulesTriggerOutputReference.property.stateValues"></a>

```typescript
public readonly stateValues: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertNotificationRulesTriggerOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccCloudwatchAlertNotificationRulesTrigger;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertNotificationRulesTrigger">DataAwsccCloudwatchAlertNotificationRulesTrigger</a>

---


### DataAwsccCloudwatchAlertRuleOutputReference <a name="DataAwsccCloudwatchAlertRuleOutputReference" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertRuleOutputReference.Initializer"></a>

```typescript
import { dataAwsccCloudwatchAlert } from '@cdktn/provider-awscc'

new dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertRuleOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertRuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertRuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertRuleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertRuleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertRuleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertRuleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertRuleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertRuleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertRuleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertRuleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertRuleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertRuleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertRuleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertRuleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertRuleOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertRuleOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertRuleOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertRuleOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertRuleOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertRuleOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertRuleOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertRuleOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertRuleOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertRuleOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertRuleOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertRuleOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertRuleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertRuleOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertRuleOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertRuleOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertRuleOutputReference.property.telemetryRule">telemetryRule</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertRuleTelemetryRuleOutputReference">DataAwsccCloudwatchAlertRuleTelemetryRuleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertRuleOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertRule">DataAwsccCloudwatchAlertRule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertRuleOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertRuleOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `telemetryRule`<sup>Required</sup> <a name="telemetryRule" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertRuleOutputReference.property.telemetryRule"></a>

```typescript
public readonly telemetryRule: DataAwsccCloudwatchAlertRuleTelemetryRuleOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertRuleTelemetryRuleOutputReference">DataAwsccCloudwatchAlertRuleTelemetryRuleOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertRuleOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccCloudwatchAlertRule;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertRule">DataAwsccCloudwatchAlertRule</a>

---


### DataAwsccCloudwatchAlertRuleTelemetryRuleConditionOutputReference <a name="DataAwsccCloudwatchAlertRuleTelemetryRuleConditionOutputReference" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertRuleTelemetryRuleConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertRuleTelemetryRuleConditionOutputReference.Initializer"></a>

```typescript
import { dataAwsccCloudwatchAlert } from '@cdktn/provider-awscc'

new dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertRuleTelemetryRuleConditionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertRuleTelemetryRuleConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertRuleTelemetryRuleConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertRuleTelemetryRuleConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertRuleTelemetryRuleConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertRuleTelemetryRuleConditionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertRuleTelemetryRuleConditionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertRuleTelemetryRuleConditionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertRuleTelemetryRuleConditionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertRuleTelemetryRuleConditionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertRuleTelemetryRuleConditionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertRuleTelemetryRuleConditionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertRuleTelemetryRuleConditionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertRuleTelemetryRuleConditionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertRuleTelemetryRuleConditionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertRuleTelemetryRuleConditionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertRuleTelemetryRuleConditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertRuleTelemetryRuleConditionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertRuleTelemetryRuleConditionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertRuleTelemetryRuleConditionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertRuleTelemetryRuleConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertRuleTelemetryRuleConditionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertRuleTelemetryRuleConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertRuleTelemetryRuleConditionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertRuleTelemetryRuleConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertRuleTelemetryRuleConditionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertRuleTelemetryRuleConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertRuleTelemetryRuleConditionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertRuleTelemetryRuleConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertRuleTelemetryRuleConditionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertRuleTelemetryRuleConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertRuleTelemetryRuleConditionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertRuleTelemetryRuleConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertRuleTelemetryRuleConditionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertRuleTelemetryRuleConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertRuleTelemetryRuleConditionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertRuleTelemetryRuleConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertRuleTelemetryRuleConditionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertRuleTelemetryRuleConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertRuleTelemetryRuleConditionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertRuleTelemetryRuleConditionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertRuleTelemetryRuleConditionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertRuleTelemetryRuleConditionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertRuleTelemetryRuleConditionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertRuleTelemetryRuleConditionOutputReference.property.comparator">comparator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertRuleTelemetryRuleConditionOutputReference.property.criticalThreshold">criticalThreshold</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertRuleTelemetryRuleConditionOutputReference.property.thresholdField">thresholdField</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertRuleTelemetryRuleConditionOutputReference.property.thresholdMode">thresholdMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertRuleTelemetryRuleConditionOutputReference.property.warningThreshold">warningThreshold</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertRuleTelemetryRuleConditionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertRuleTelemetryRuleCondition">DataAwsccCloudwatchAlertRuleTelemetryRuleCondition</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertRuleTelemetryRuleConditionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertRuleTelemetryRuleConditionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `comparator`<sup>Required</sup> <a name="comparator" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertRuleTelemetryRuleConditionOutputReference.property.comparator"></a>

```typescript
public readonly comparator: string;
```

- *Type:* string

---

##### `criticalThreshold`<sup>Required</sup> <a name="criticalThreshold" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertRuleTelemetryRuleConditionOutputReference.property.criticalThreshold"></a>

```typescript
public readonly criticalThreshold: number;
```

- *Type:* number

---

##### `thresholdField`<sup>Required</sup> <a name="thresholdField" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertRuleTelemetryRuleConditionOutputReference.property.thresholdField"></a>

```typescript
public readonly thresholdField: string;
```

- *Type:* string

---

##### `thresholdMode`<sup>Required</sup> <a name="thresholdMode" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertRuleTelemetryRuleConditionOutputReference.property.thresholdMode"></a>

```typescript
public readonly thresholdMode: string;
```

- *Type:* string

---

##### `warningThreshold`<sup>Required</sup> <a name="warningThreshold" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertRuleTelemetryRuleConditionOutputReference.property.warningThreshold"></a>

```typescript
public readonly warningThreshold: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertRuleTelemetryRuleConditionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccCloudwatchAlertRuleTelemetryRuleCondition;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertRuleTelemetryRuleCondition">DataAwsccCloudwatchAlertRuleTelemetryRuleCondition</a>

---


### DataAwsccCloudwatchAlertRuleTelemetryRuleEvaluationOutputReference <a name="DataAwsccCloudwatchAlertRuleTelemetryRuleEvaluationOutputReference" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertRuleTelemetryRuleEvaluationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertRuleTelemetryRuleEvaluationOutputReference.Initializer"></a>

```typescript
import { dataAwsccCloudwatchAlert } from '@cdktn/provider-awscc'

new dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertRuleTelemetryRuleEvaluationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertRuleTelemetryRuleEvaluationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertRuleTelemetryRuleEvaluationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertRuleTelemetryRuleEvaluationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertRuleTelemetryRuleEvaluationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertRuleTelemetryRuleEvaluationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertRuleTelemetryRuleEvaluationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertRuleTelemetryRuleEvaluationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertRuleTelemetryRuleEvaluationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertRuleTelemetryRuleEvaluationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertRuleTelemetryRuleEvaluationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertRuleTelemetryRuleEvaluationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertRuleTelemetryRuleEvaluationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertRuleTelemetryRuleEvaluationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertRuleTelemetryRuleEvaluationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertRuleTelemetryRuleEvaluationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertRuleTelemetryRuleEvaluationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertRuleTelemetryRuleEvaluationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertRuleTelemetryRuleEvaluationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertRuleTelemetryRuleEvaluationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertRuleTelemetryRuleEvaluationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertRuleTelemetryRuleEvaluationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertRuleTelemetryRuleEvaluationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertRuleTelemetryRuleEvaluationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertRuleTelemetryRuleEvaluationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertRuleTelemetryRuleEvaluationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertRuleTelemetryRuleEvaluationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertRuleTelemetryRuleEvaluationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertRuleTelemetryRuleEvaluationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertRuleTelemetryRuleEvaluationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertRuleTelemetryRuleEvaluationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertRuleTelemetryRuleEvaluationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertRuleTelemetryRuleEvaluationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertRuleTelemetryRuleEvaluationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertRuleTelemetryRuleEvaluationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertRuleTelemetryRuleEvaluationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertRuleTelemetryRuleEvaluationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertRuleTelemetryRuleEvaluationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertRuleTelemetryRuleEvaluationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertRuleTelemetryRuleEvaluationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertRuleTelemetryRuleEvaluationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertRuleTelemetryRuleEvaluationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertRuleTelemetryRuleEvaluationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertRuleTelemetryRuleEvaluationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertRuleTelemetryRuleEvaluationOutputReference.property.intervalSeconds">intervalSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertRuleTelemetryRuleEvaluationOutputReference.property.pendingDurationSeconds">pendingDurationSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertRuleTelemetryRuleEvaluationOutputReference.property.recoveryDurationSeconds">recoveryDurationSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertRuleTelemetryRuleEvaluationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertRuleTelemetryRuleEvaluation">DataAwsccCloudwatchAlertRuleTelemetryRuleEvaluation</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertRuleTelemetryRuleEvaluationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertRuleTelemetryRuleEvaluationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `intervalSeconds`<sup>Required</sup> <a name="intervalSeconds" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertRuleTelemetryRuleEvaluationOutputReference.property.intervalSeconds"></a>

```typescript
public readonly intervalSeconds: number;
```

- *Type:* number

---

##### `pendingDurationSeconds`<sup>Required</sup> <a name="pendingDurationSeconds" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertRuleTelemetryRuleEvaluationOutputReference.property.pendingDurationSeconds"></a>

```typescript
public readonly pendingDurationSeconds: number;
```

- *Type:* number

---

##### `recoveryDurationSeconds`<sup>Required</sup> <a name="recoveryDurationSeconds" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertRuleTelemetryRuleEvaluationOutputReference.property.recoveryDurationSeconds"></a>

```typescript
public readonly recoveryDurationSeconds: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertRuleTelemetryRuleEvaluationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccCloudwatchAlertRuleTelemetryRuleEvaluation;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertRuleTelemetryRuleEvaluation">DataAwsccCloudwatchAlertRuleTelemetryRuleEvaluation</a>

---


### DataAwsccCloudwatchAlertRuleTelemetryRuleNoDataOutputReference <a name="DataAwsccCloudwatchAlertRuleTelemetryRuleNoDataOutputReference" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertRuleTelemetryRuleNoDataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertRuleTelemetryRuleNoDataOutputReference.Initializer"></a>

```typescript
import { dataAwsccCloudwatchAlert } from '@cdktn/provider-awscc'

new dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertRuleTelemetryRuleNoDataOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertRuleTelemetryRuleNoDataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertRuleTelemetryRuleNoDataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertRuleTelemetryRuleNoDataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertRuleTelemetryRuleNoDataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertRuleTelemetryRuleNoDataOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertRuleTelemetryRuleNoDataOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertRuleTelemetryRuleNoDataOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertRuleTelemetryRuleNoDataOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertRuleTelemetryRuleNoDataOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertRuleTelemetryRuleNoDataOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertRuleTelemetryRuleNoDataOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertRuleTelemetryRuleNoDataOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertRuleTelemetryRuleNoDataOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertRuleTelemetryRuleNoDataOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertRuleTelemetryRuleNoDataOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertRuleTelemetryRuleNoDataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertRuleTelemetryRuleNoDataOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertRuleTelemetryRuleNoDataOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertRuleTelemetryRuleNoDataOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertRuleTelemetryRuleNoDataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertRuleTelemetryRuleNoDataOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertRuleTelemetryRuleNoDataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertRuleTelemetryRuleNoDataOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertRuleTelemetryRuleNoDataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertRuleTelemetryRuleNoDataOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertRuleTelemetryRuleNoDataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertRuleTelemetryRuleNoDataOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertRuleTelemetryRuleNoDataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertRuleTelemetryRuleNoDataOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertRuleTelemetryRuleNoDataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertRuleTelemetryRuleNoDataOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertRuleTelemetryRuleNoDataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertRuleTelemetryRuleNoDataOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertRuleTelemetryRuleNoDataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertRuleTelemetryRuleNoDataOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertRuleTelemetryRuleNoDataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertRuleTelemetryRuleNoDataOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertRuleTelemetryRuleNoDataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertRuleTelemetryRuleNoDataOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertRuleTelemetryRuleNoDataOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertRuleTelemetryRuleNoDataOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertRuleTelemetryRuleNoDataOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertRuleTelemetryRuleNoDataOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertRuleTelemetryRuleNoDataOutputReference.property.treatAs">treatAs</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertRuleTelemetryRuleNoDataOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertRuleTelemetryRuleNoData">DataAwsccCloudwatchAlertRuleTelemetryRuleNoData</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertRuleTelemetryRuleNoDataOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertRuleTelemetryRuleNoDataOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `treatAs`<sup>Required</sup> <a name="treatAs" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertRuleTelemetryRuleNoDataOutputReference.property.treatAs"></a>

```typescript
public readonly treatAs: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertRuleTelemetryRuleNoDataOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccCloudwatchAlertRuleTelemetryRuleNoData;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertRuleTelemetryRuleNoData">DataAwsccCloudwatchAlertRuleTelemetryRuleNoData</a>

---


### DataAwsccCloudwatchAlertRuleTelemetryRuleOutputReference <a name="DataAwsccCloudwatchAlertRuleTelemetryRuleOutputReference" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertRuleTelemetryRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertRuleTelemetryRuleOutputReference.Initializer"></a>

```typescript
import { dataAwsccCloudwatchAlert } from '@cdktn/provider-awscc'

new dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertRuleTelemetryRuleOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertRuleTelemetryRuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertRuleTelemetryRuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertRuleTelemetryRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertRuleTelemetryRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertRuleTelemetryRuleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertRuleTelemetryRuleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertRuleTelemetryRuleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertRuleTelemetryRuleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertRuleTelemetryRuleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertRuleTelemetryRuleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertRuleTelemetryRuleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertRuleTelemetryRuleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertRuleTelemetryRuleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertRuleTelemetryRuleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertRuleTelemetryRuleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertRuleTelemetryRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertRuleTelemetryRuleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertRuleTelemetryRuleOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertRuleTelemetryRuleOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertRuleTelemetryRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertRuleTelemetryRuleOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertRuleTelemetryRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertRuleTelemetryRuleOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertRuleTelemetryRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertRuleTelemetryRuleOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertRuleTelemetryRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertRuleTelemetryRuleOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertRuleTelemetryRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertRuleTelemetryRuleOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertRuleTelemetryRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertRuleTelemetryRuleOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertRuleTelemetryRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertRuleTelemetryRuleOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertRuleTelemetryRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertRuleTelemetryRuleOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertRuleTelemetryRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertRuleTelemetryRuleOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertRuleTelemetryRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertRuleTelemetryRuleOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertRuleTelemetryRuleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertRuleTelemetryRuleOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertRuleTelemetryRuleOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertRuleTelemetryRuleOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertRuleTelemetryRuleOutputReference.property.condition">condition</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertRuleTelemetryRuleConditionOutputReference">DataAwsccCloudwatchAlertRuleTelemetryRuleConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertRuleTelemetryRuleOutputReference.property.evaluation">evaluation</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertRuleTelemetryRuleEvaluationOutputReference">DataAwsccCloudwatchAlertRuleTelemetryRuleEvaluationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertRuleTelemetryRuleOutputReference.property.noData">noData</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertRuleTelemetryRuleNoDataOutputReference">DataAwsccCloudwatchAlertRuleTelemetryRuleNoDataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertRuleTelemetryRuleOutputReference.property.query">query</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertRuleTelemetryRuleQueryOutputReference">DataAwsccCloudwatchAlertRuleTelemetryRuleQueryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertRuleTelemetryRuleOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertRuleTelemetryRule">DataAwsccCloudwatchAlertRuleTelemetryRule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertRuleTelemetryRuleOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertRuleTelemetryRuleOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `condition`<sup>Required</sup> <a name="condition" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertRuleTelemetryRuleOutputReference.property.condition"></a>

```typescript
public readonly condition: DataAwsccCloudwatchAlertRuleTelemetryRuleConditionOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertRuleTelemetryRuleConditionOutputReference">DataAwsccCloudwatchAlertRuleTelemetryRuleConditionOutputReference</a>

---

##### `evaluation`<sup>Required</sup> <a name="evaluation" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertRuleTelemetryRuleOutputReference.property.evaluation"></a>

```typescript
public readonly evaluation: DataAwsccCloudwatchAlertRuleTelemetryRuleEvaluationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertRuleTelemetryRuleEvaluationOutputReference">DataAwsccCloudwatchAlertRuleTelemetryRuleEvaluationOutputReference</a>

---

##### `noData`<sup>Required</sup> <a name="noData" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertRuleTelemetryRuleOutputReference.property.noData"></a>

```typescript
public readonly noData: DataAwsccCloudwatchAlertRuleTelemetryRuleNoDataOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertRuleTelemetryRuleNoDataOutputReference">DataAwsccCloudwatchAlertRuleTelemetryRuleNoDataOutputReference</a>

---

##### `query`<sup>Required</sup> <a name="query" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertRuleTelemetryRuleOutputReference.property.query"></a>

```typescript
public readonly query: DataAwsccCloudwatchAlertRuleTelemetryRuleQueryOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertRuleTelemetryRuleQueryOutputReference">DataAwsccCloudwatchAlertRuleTelemetryRuleQueryOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertRuleTelemetryRuleOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccCloudwatchAlertRuleTelemetryRule;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertRuleTelemetryRule">DataAwsccCloudwatchAlertRuleTelemetryRule</a>

---


### DataAwsccCloudwatchAlertRuleTelemetryRuleQueryOutputReference <a name="DataAwsccCloudwatchAlertRuleTelemetryRuleQueryOutputReference" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertRuleTelemetryRuleQueryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertRuleTelemetryRuleQueryOutputReference.Initializer"></a>

```typescript
import { dataAwsccCloudwatchAlert } from '@cdktn/provider-awscc'

new dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertRuleTelemetryRuleQueryOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertRuleTelemetryRuleQueryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertRuleTelemetryRuleQueryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertRuleTelemetryRuleQueryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertRuleTelemetryRuleQueryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertRuleTelemetryRuleQueryOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertRuleTelemetryRuleQueryOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertRuleTelemetryRuleQueryOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertRuleTelemetryRuleQueryOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertRuleTelemetryRuleQueryOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertRuleTelemetryRuleQueryOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertRuleTelemetryRuleQueryOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertRuleTelemetryRuleQueryOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertRuleTelemetryRuleQueryOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertRuleTelemetryRuleQueryOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertRuleTelemetryRuleQueryOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertRuleTelemetryRuleQueryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertRuleTelemetryRuleQueryOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertRuleTelemetryRuleQueryOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertRuleTelemetryRuleQueryOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertRuleTelemetryRuleQueryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertRuleTelemetryRuleQueryOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertRuleTelemetryRuleQueryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertRuleTelemetryRuleQueryOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertRuleTelemetryRuleQueryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertRuleTelemetryRuleQueryOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertRuleTelemetryRuleQueryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertRuleTelemetryRuleQueryOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertRuleTelemetryRuleQueryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertRuleTelemetryRuleQueryOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertRuleTelemetryRuleQueryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertRuleTelemetryRuleQueryOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertRuleTelemetryRuleQueryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertRuleTelemetryRuleQueryOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertRuleTelemetryRuleQueryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertRuleTelemetryRuleQueryOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertRuleTelemetryRuleQueryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertRuleTelemetryRuleQueryOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertRuleTelemetryRuleQueryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertRuleTelemetryRuleQueryOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertRuleTelemetryRuleQueryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertRuleTelemetryRuleQueryOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertRuleTelemetryRuleQueryOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertRuleTelemetryRuleQueryOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertRuleTelemetryRuleQueryOutputReference.property.expression">expression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertRuleTelemetryRuleQueryOutputReference.property.language">language</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertRuleTelemetryRuleQueryOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertRuleTelemetryRuleQuery">DataAwsccCloudwatchAlertRuleTelemetryRuleQuery</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertRuleTelemetryRuleQueryOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertRuleTelemetryRuleQueryOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertRuleTelemetryRuleQueryOutputReference.property.expression"></a>

```typescript
public readonly expression: string;
```

- *Type:* string

---

##### `language`<sup>Required</sup> <a name="language" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertRuleTelemetryRuleQueryOutputReference.property.language"></a>

```typescript
public readonly language: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertRuleTelemetryRuleQueryOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccCloudwatchAlertRuleTelemetryRuleQuery;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertRuleTelemetryRuleQuery">DataAwsccCloudwatchAlertRuleTelemetryRuleQuery</a>

---


### DataAwsccCloudwatchAlertTagsList <a name="DataAwsccCloudwatchAlertTagsList" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertTagsList.Initializer"></a>

```typescript
import { dataAwsccCloudwatchAlert } from '@cdktn/provider-awscc'

new dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertTagsList.get"></a>

```typescript
public get(index: number): DataAwsccCloudwatchAlertTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccCloudwatchAlertTagsOutputReference <a name="DataAwsccCloudwatchAlertTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertTagsOutputReference.Initializer"></a>

```typescript
import { dataAwsccCloudwatchAlert } from '@cdktn/provider-awscc'

new dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertTags">DataAwsccCloudwatchAlertTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccCloudwatchAlertTags;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudwatchAlert.DataAwsccCloudwatchAlertTags">DataAwsccCloudwatchAlertTags</a>

---



